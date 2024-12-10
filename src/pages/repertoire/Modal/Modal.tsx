import React from "react";
import { useForm } from "react-hook-form";
import { imageAPI } from "../../../api/imageAPI";
import { repertoireAPI } from "../../../api/repertoireAPI";
import { sessionAPI } from "../../../api/sessionAPI";

export default function Modal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  const { register, handleSubmit } = useForm<{
    title: string;
    description: string;
    category: string;
    date: Date;
    price: number;
  }>();
  const [image, setImage] = React.useState<File | null>(null);
  const [imagePreview, setImagePreview] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  if (!open) return <div></div>;

  const onSubmit = async (data: {
    title: string;
    description: string;
    category: string;
    date: Date;
    price: number;
  }) => {
    if (!image) {
      setError("Пожалуйста, выберите изображение сцены");
      return;
    }
    try {
      const imageData: string = await imageAPI.uploadImage(image);
      const {id} = await repertoireAPI.addRepertoire({ ...data, image: imageData });
      const dataResponse = await sessionAPI.addSession({
        repertoireId: id,
        time: data.date,
        price: data.price,
      });
      if(dataResponse!.status !== 200) {
        setError(dataResponse?.data);
      }
      handleClose();
      window.location.reload();
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="fixed z-[9999] top-0 left-0 overflow-y-hidden h-screen w-screen bg-black/30 flex justify-center items-center">
      <div className="bg-white w-[50vw]  flex flex-col items-center p-3 px-5 rounded-md">
        <div className="text-3xl flex justify-between items-center w-full mb-5">
          <span>Добавить сцену</span>
          <span>
            <img
              onClick={handleClose}
              src="/icons/close.svg"
              className="h-[20px] w-[20px] cursor-pointer"
              alt="close"
            />
          </span>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 w-full"
        >
          {error && <div className="text-red-500 text-center">{error}</div>}
          {imagePreview && (
            <img
              src={imagePreview}
              alt="repertoire"
              className="w-[200px] h-[200px]"
            />
          )}
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setImagePreview(URL.createObjectURL(e.target.files[0]));
                setImage(e.target.files[0]);
              }
            }}
          />
          <input
            {...register("title", { required: true })}
            placeholder="Введите название"
            className="h-[70px] text-4xl px-3 w-full bg-[#F2F2ED] border-black border-2"
          />
          <input
            {...register("description", { required: true })}
            placeholder="Введите описание"
            className="h-[70px] text-4xl px-3 w-full bg-[#F2F2ED] border-black border-2"
          />
          <input
            {...register("category", { required: true })}
            placeholder="Введите возрастную категорию(12+)"
            className="h-[70px] text-4xl px-3 w-full bg-[#F2F2ED] border-black border-2"
          />
          <span>
            Дата ближайшей сессии:{" "}
            <input
              type="datetime-local"
              {...register("date", { required: true })}
            />
          </span>
          <input {...register("price", {required: true})} placeholder="Введите цену" className="h-[70px] text-4xl px-3 w-full bg-[#F2F2ED] border-black border-2" />
          <button
            type="submit"
            className="bg-black text-white h-[55px] px-5 py-2 rounded-sm"
          >
            Добавить спектакль
          </button>
        </form>
      </div>
    </div>
  );
}
