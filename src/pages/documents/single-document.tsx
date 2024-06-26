import { ErrorBoundary } from "@/components";
import { Loading } from "@/components/ui";
import { queryKeys } from "@/constants/query-keys";
import { DocumentInfo } from "@/features/documents";
import { API } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const SingleDocument = () => {
  const params = useParams();
  const { data, isFetching, isError } = useQuery({
    queryKey: [queryKeys.SINGLE_DOCUMENT, params.id],
    queryFn: async () => API.singleDocuments(Number(params.id)),
  });

  if (isError) return <p>Error has occurred appeal to a specialist</p>;
  if (isFetching) return <Loading />;

  console.log(data);

  return (
    <ErrorBoundary>
      <DocumentInfo data={data} />
    </ErrorBoundary>
  );
};

export default SingleDocument;
