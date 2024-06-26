import { Button } from "antd";
import { FC } from "react";
import { DocumentInfoWrapper } from "./style";
import { Input, Select } from "@/components/ui";
import { selectOptions } from "@/constants";
import { useNavigate } from "react-router-dom";

interface IProps {
  data: any;
}

const DocumentInfo: FC<IProps> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <DocumentInfoWrapper>
      <div className="document__inner">
        <div className="form_container">
          <h3 className="title">{data.documentName}</h3>
          {data?.fields &&
            data?.fields.map((el: any) => (
              <div key={el.id}>
                <div className="form_item">
                  <Input
                    name="field_name"
                    type="text"
                    list={false}
                    label="Name"
                    defaultValue={el.field_name}
                  />
                </div>

                <div className="form_item">
                  <Input
                    name="field_seq"
                    type="number"
                    list={false}
                    label="Field sequence (weight)"
                    defaultValue={el.field_seq}
                  />
                </div>

                <div className="form_item">
                  <Select
                    name="field_type"
                    label="Field type"
                    list={false}
                    options={selectOptions}
                    defaultValue={el.field_type}
                  />
                </div>
              </div>
            ))}

          <Button
            type="primary"
            className="document__btn"
            htmlType="button"
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </div>
      </div>
    </DocumentInfoWrapper>
  );
};

export default DocumentInfo;
