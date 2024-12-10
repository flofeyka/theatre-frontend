import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { authAPI } from "../../api/authAPI";
import { User } from "../../types/types";

export default function AuthLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = React.useState<User | null>(null);

  React.useEffect(() => {
    const checkAuth = async () => {
      const response = await authAPI.refreshToken();
      // if (
      //   response.status === 200 &&
      //   (location.pathname === "/login" || location.pathname === "/register")
      // ) {
      //   navigate("/lk");
      // } else {
      //   navigate("/login");
      // }

      setUserData(response?.data?.user);

      if(response.status !== 200 && location.pathname !== "/login" && location.pathname !== "/register") {
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate, setUserData, userData?.id, location.pathname]);

  return (
    <div className="bg-[#E1E1DD] flex justify-center items-center min-h-screen">
      <Outlet context={[userData]} />
    </div>
  );
}
