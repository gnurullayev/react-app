import { ErrorBoundary } from "@/components";
import PageLayout from "@/components/Layout/PageLayout";
import { RegistrationForm } from "@/features/registration";

const Registration = () => {
  return (
    <ErrorBoundary>
      <PageLayout>
        <RegistrationForm />
      </PageLayout>
    </ErrorBoundary>
  );
};

export default Registration;
