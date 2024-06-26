import { ErrorBoundary } from "@/components";
import PageLayout from "@/components/Layout/PageLayout";
import { LoginForm } from "@/features/Login";

const Login = () => {
  return (
    <ErrorBoundary>
      <PageLayout>
        <LoginForm />
      </PageLayout>
    </ErrorBoundary>
  );
};

export default Login;
