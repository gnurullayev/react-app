import { ErrorBoundary } from "@/components";
import PageLayout from "@/components/Layout/PageLayout";
import { queryKeys } from "@/constants/query-keys";
import { Documents } from "@/features/home";
import { API } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data, isFetching, isError } = useQuery({
    queryKey: [queryKeys.DOCUMENTS],
    queryFn: async () => API.documents(),
  });

  if (isError) return <p>Error has occurred appeal to a specialist</p>;
  return (
    <>
      <ErrorBoundary>
        <PageLayout>
          <Documents
            documents={data?.data}
            isLoading={isFetching}
            total={data?.total}
          />
        </PageLayout>
      </ErrorBoundary>
    </>
  );
};

export default Home;
