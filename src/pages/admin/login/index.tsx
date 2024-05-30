import { AiOutlineClose } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from '@mantine/form';
import { useLoginMutation } from "src/store";
import { UseActions } from "src/hooks";
import "./index.scss";



const initialValues: LoginReqType = {
    username: "admin",
    password: "Admin001"
}
export const LoginPage = () => {
    const [login] = useLoginMutation();
    const { setCredentials } = UseActions();
    const navigate = useNavigate()
    const form = useForm({
        initialValues,
    })

    const handleSubmit = async (values: LoginReqType) => {
        try {
            const response = await login(values);
            if ("error" in response) {
                throw response.error
            } else {
                setCredentials(response.data);
                navigate("/admin");
            }
        } catch (error) {
        }
    };

    return (
        <div className="creat-account" style={{ backgroundImage: "url('/img/registr-bg.png')" }}>
            <div className="creat-block">
                <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                    <div className="account-img"><img src="/img/amin-logo.png" alt="" /></div>
                    <div className="creat-inside">
                        <h5>  <NavLink to="/"> <AiOutlineClose /></NavLink> </h5>
                        <h1>Добро пожаловать!</h1>
                        <h2>Войдите в свой аккаунт!</h2>
                        <input
                            max={7}
                            min={7}
                            type="text"
                            placeholder="Логин"
                            {...form.getInputProps("username")}
                        />
                        <input
                            type="text"
                            placeholder="Пароль"
                            {...form.getInputProps("password")}
                        />
                        <div className="account-btn">
                            <button type="submit"><h3>Войти</h3></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

