import { Input } from "@/components/ui";
import { Button, Form, message } from "antd";
import { RegistrationFormWrapper } from "./style";
import { useMutation } from "@tanstack/react-query";
import { dispatch } from "@/redux";
import { API } from "@/services/api";

const RegistrationForm = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: any) => API.registration(data),
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
    <RegistrationFormWrapper>
      <div className="registration__inner">
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
            <h3 className="registration__title">Registration</h3>

            <div className="form_item">
              <Input
                name="name"
                type="text"
                placeholder="Name"
                list={false}
                rules={[
                  {
                    required: true,
                    message: "Enter your Name",
                  },
                ]}
              />
            </div>

            <div className="form_item">
              <Input
                name="email"
                type="email"
                placeholder="Email"
                list={false}
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
                placeholder="New password"
                list={false}
                rules={[
                  {
                    required: true,
                    message: "Enter your password",
                  },
                ]}
              />
            </div>

            <div className="registration_item">
              <Input
                name="password_confirmation"
                type="text"
                placeholder="Password"
                list={false}
                rules={[
                  {
                    required: true,
                    message: "Enter your password again",
                  },
                ]}
              />
            </div>

            <Button
              type="primary"
              className="registration__btn"
              htmlType="submit"
              loading={isPending}
              disabled={isPending}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </RegistrationFormWrapper>
  );
};

export default RegistrationForm;
