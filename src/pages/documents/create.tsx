import { ErrorBoundary } from "@/components";
import { routes } from "@/constants/routes";
import { DocumentForm } from "@/features/documents";
import { API } from "@/services/api";
import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const DocumentCreate = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: any) => API.documentsCreate(data),
    onSuccess: (response) => {
      if (response.success) {
        message.success("Document created");
        navigate(routes.HOME);
      }
    },
    onError: (error: any) => {
      if (error?.response?.data?.message) {
        message.error(error?.response?.data?.message);
      } else {
        message.error(error?.message);
      }
    },
  });

  return (
    <ErrorBoundary>
      <DocumentForm mutate={mutate} isPending={isPending} />
    </ErrorBoundary>
  );
};

export default DocumentCreate;
