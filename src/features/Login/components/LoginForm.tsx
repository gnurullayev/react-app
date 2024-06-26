import { Input } from "@/components/ui";
import { LoginFormWrapper } from "./style";
import { Button, Form, message } from "antd";
import { useMutation } from "@tanstack/react-query";
import { API } from "@/services/api";
import { dispatch } from "@/redux";
import { Link } from "react-router-dom";
import { routes } from "@/constants/routes";

const LoginForm = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: any) => API.login(data),
    onSuccess: (response) => {
      dispatch.auth.login(response.access_token);
      dispatch.userData.userData(response.user);
    },
    onError: (error: any) => {
      if (error?.response?.data?.message) {
        message.error(error?.response?.data?.message);
      } else {
        message.error(error?.message);
      }
    },
  });

  const handleFormSubmit = (data: any) => {
    mutate(data);
  };

  return (
    <LoginFormWrapper>
      <div className="login__inner">
        <div className="form_container">
          <Form
            name="wrap"
            labelCol={{ flex: "110px" }}
            labelAlign="left"
            labelWrap
            wrapperCol={{ flex: 1 }}
            colon={false}
            onFinish={handleFormSubmit}
          >
            <h3 className="login__title">Login</h3>

            <div className="form_item">
              <Input
                name="email"
                type="text"
                list={false}
                placeholder="Enter your email"
                rules={[
                  {
                    required: true,
                    message: "Enter your email",
                  },
                ]}
              />
            </div>

            <div className="form_item">
              <Input
                name="password"
                type="text"
                list={false}
                placeholder="Enter your password"
                rules={[
                  {
                    required: true,
                    message: "Enter your password",
                  },
                ]}
              />
            </div>

            <Button
              type="primary"
              className="login__btn"
              htmlType="submit"
              loading={isPending}
              disabled={isPending}
            >
              Submit
            </Button>
            <Link
              style={{ display: "block", marginTop: "20px" }}
              to={routes.REGISTRATION}
            >
              Registration
            </Link>
          </Form>
        </div>
      </div>
    </LoginFormWrapper>
  );
};

export default LoginForm;
