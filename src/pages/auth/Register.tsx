import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { authAPI } from "../../api/authAPI";

type InputType = {
  email: string;
  fullName: string;
  phoneNumber: string;
  birth: Date;
  agreement: boolean;
  password: string;
  repeatPassword: string;
};

export default function Register() {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    fullName: yup.string().required(),
    phoneNumber: yup.string().required(),
    birth: yup.date().required(),
    agreement: yup.boolean().required(),
    password: yup.string().min(8).required(),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Пароли не совпадают")
      .required(),
  });
  const { register, handleSubmit } = useForm<InputType>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: InputType) => {
    const responseData = await authAPI.signUp(data);
    if (responseData.status === 200) {
      navigate("/");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[70%] sm:w-full sm:h-full h-[83%] bg-[#F2F2ED] flex flex-col gap-5 "
    >
      <header className="flex flex-col items-center mt-10">
        <div className="border-b-2 border-[#9B9696] text-[48px] px-5 font-serif">
          Регистрация
        </div>
        <div className="text-[13px] w-[35%] sm:w-full sm:text-[18px] mt-2 text-center">
          Войдите в свой профиль, чтобы быстро и легко бронировать билеты
        </div>
      </header>

      <div className="flex justify-center font-serif sm:flex-col">
        <div className="flex items-center flex-col gap-5 w-[50%] sm:w-full">
          <div className="w-[79.5%]">
            <label htmlFor="fullName" className="text-2xl">
              Имя и фамилия
            </label>
            <input
              {...register("fullName", { required: true })}
              placeholder="Имя и фамилия"
              id="fullName"
              className="h-[75px] text-4xl px-3 w-full bg-[#F2F2ED] border-black border-2"
            />
          </div>
          <div className="w-[79.5%]">
            <label htmlFor="phone" className="text-2xl">Номер телефона</label>
            <InputMask
              id="phone"
              mask="+7 (999)-999-99-99"
              {...register("phoneNumber", { required: true })}
              placeholder="+7 (123)456-78-90"
              className="h-[75px] text-4xl px-3 w-full bg-[#F2F2ED] border-black border-2"
            />
          </div>
          <div className="w-[79.5%] items-center flex flex-col">
            <label htmlFor="birth" className="text-2xl text-start w-full">Дата рождения</label>
            <input
              {...register("birth", { valueAsDate: true })}
              type="date"
              id="birth"
              placeholder="Дата рождения"
              className="h-[75px] text-4xl px-3 w-full bg-[#F2F2ED] border-black border-2"
            />
          </div>
          <div className="w-[80%] text-[19px]">
            <input {...register("agreement")} type="checkbox" /> Я соглашаюсь с{" "}
              пользовательским соглашением и даю разрешение на обработку своих персональных данных
          </div>
        </div>

        <div className="flex items-center flex-col gap-5 w-[50%] sm:w-full">
          <div className="w-[79.5%]">
            <label htmlFor="email" className="text-2xl">Электронная почта</label>
            <input
              {...register("email")}
              id="email"
              placeholder="Электронная почта"
              className="h-[75px] text-4xl px-3 w-full bg-[#F2F2ED] border-black border-2"
            />
          </div>
          <div className="w-[79.5%]">
            <label htmlFor="password" className="text-2xl">
              Пароль
            </label>
            <input
              id="password"
              {...register("password")}
              type="password"
              placeholder="Пароль"
              className="h-[75px] text-4xl px-3 w-full bg-[#F2F2ED] border-black border-2"
            />
          </div>
          <div className="w-[79.5%]">
            <label htmlFor="repeatPassword" className="text-2xl">
              Повторите пароль
            </label>
            <input
              {...register("repeatPassword")}
              type="password"
              id="repeatPassword"
              placeholder="Повторите пароль"
              className="h-[75px] text-4xl px-3 w-full bg-[#F2F2ED] border-black border-2"
            />
          </div>
          <div className="w-[79%]">
            <button
              type="submit"
              className="bg-[#E6CF28] h-[75px] w-full font-serif text-3xl"
            >
              Зарегистрироваться
            </button>
          </div>
        </div>
      </div>

      <div className="text-center font-serif text-xl">
        <div>Уже зарегистрированы ?</div>
        <Link to="/login">Войти</Link>
      </div>
    </form>
  );
}
