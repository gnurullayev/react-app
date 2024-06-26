import { DocumentsTableWrapper } from "./style";
import { routes } from "@/constants/routes";
import { Link } from "react-router-dom";
import { FC } from "react";
import { Table } from "antd";
import { formattedDate } from "@/utils";

interface IProps {
  documents: any[];
  isLoading: boolean;
  total: number;
}

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "DOCUMENT TITLE",
    dataIndex: "document_name",
    key: "document_name",
  },
  {
    title: "CREATED DATE",
    dataIndex: "created_at",
    key: "created_at",
    render: (data: any) => <span>{formattedDate(data)}</span>,
  },
  {
    title: "DOCUMENT SIZE",
    dataIndex: "field_count",
    key: "field_count",
  },
  {
    title: "Actions",
    key: "actions",
    render: (data: any) => (
      <div className="actions">
        <Link
          className="actions_link"
          to={`${routes.SINGLE_DOCUMENT}/${data.id}`}
        >
          Document preview
        </Link>
      </div>
    ),
  },
];

const Documents: FC<IProps> = ({ documents, isLoading }) => {
  return (
    <>
      <DocumentsTableWrapper>
        <div className="document_inner">
          <div className="document_header">
            <Link className="document_header_link" to={routes.DOCUMENT_CREATE}>
              New document form
            </Link>
          </div>

          <Table
            rowClassName="organizations__table"
            columns={columns}
            dataSource={documents}
            rowKey="key"
            loading={isLoading}
            pagination={false}
          />
        </div>
      </DocumentsTableWrapper>
    </>
  );
};

export default Documents;
