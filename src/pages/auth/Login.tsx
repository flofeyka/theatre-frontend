import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthType } from "../../types/types";
import { authAPI } from "../../api/authAPI";

export default function Login() {
  const { register, handleSubmit } = useForm<AuthType>();
  const onSubmit = (data: AuthType) => authAPI.signIn(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-h-[55vh] min-w-[400px] w-[30vw] bg-[#F2F2ED] flex flex-col items-center p-5 px-7"
    >
      <div className="border-b-2 border-[#9B9696] text-[48px] px-5 font-serif">
        Авторизация
      </div>
      <div className="text-center text-[13px] mt-2">
        Войдите в свой профиль, чтобы быстро и легко бронировать билеты
      </div>

      <div className="mt-5 w-full flex flex-col gap-5 font-serif">
        <input
          {...register("email", { required: true })}
          placeholder="Введите эл. почту"
          className="h-[70px] text-4xl px-3 w-full bg-[#F2F2ED] border-black border-2"
        />
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Введите пароль"
          className="h-[70px] text-4xl px-3 w-full bg-[#F2F2ED] border-black border-2"
        />

        <div>
          <button
            type="submit"
            className="h-[70px] w-full font-serif text-2xl bg-yellow-500"
          >
            Авторизоваться
          </button>

          <div className="text-center font-serif text-xl mt-3">
            <div>Еще не зарегистрированы ?</div>
            <Link className="text-[#E6CF28]" to="/register">
              Зарегистрироваться
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
