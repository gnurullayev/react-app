import { Button, Checkbox, Form } from "antd";
import { Input, Select } from "@/components/ui";
import { FC, useState } from "react";
import { DocumentFormWrapper } from "./style";
import { selectOptions } from "@/constants";

interface IProps {
  mutate: (a: any) => void;
  isPending: boolean;
}

const defaultValue = {
  document_nam: "",
  form_values: [{ field_seq: "", field_name: "", field_type: "" }],
};

const DocumentForm: FC<IProps> = ({ mutate, isPending }) => {
  const [isMandatories, setIsMandatories] = useState<any>([false]);
  const [selectId, setSelectId] = useState<any>(null);
  const [form] = Form.useForm();
  const handleFormSubmit = (data: any) => {
    const form_values = data.form_values.map((el: any, idx: any) => ({
      ...el,
      is_mandatory: Number(isMandatories[idx]),
      select_values:
        el.field_type === "2"
          ? [
              {
                value: !!Number(el.select_value),
                label: Number(el.select_value) ? "Agree" : "Disagree",
              },
            ]
          : null,
    }));
    const documentData = { ...data, form_values };
    mutate(documentData);
  };

  const onCheckboxChange = (idx: any, evt: any) => {
    const findIdx = isMandatories.findIndex(
      (_: any, itemIdx: any) => itemIdx === idx
    );

    if (findIdx >= 0) {
      const data = isMandatories.map((item: any, itemIdx: number) =>
        itemIdx === idx ? evt.target.checked : item
      );

      setIsMandatories(data);
    } else {
      setIsMandatories((prev: any) => [...prev, evt.target.checked]);
    }
  };

  return (
    <DocumentFormWrapper>
      {" "}
      <div className="document__inner">
        <div className="form_container">
          <Form
            name="wrap"
            layout="vertical"
            labelAlign="left"
            labelWrap
            form={form}
            wrapperCol={{ flex: 1 }}
            colon={false}
            onFinish={handleFormSubmit}
            initialValues={defaultValue}
          >
            <div className="form_item">
              <Input
                name="document_name"
                type="text"
                label="Document title"
                list={false}
                rules={[
                  {
                    required: true,
                    message: "Enter Document title",
                  },
                ]}
              />
            </div>

            <Form.List name="form_values">
              {(fields, { add }) => (
                <>
                  <div>
                    {fields.map((field, idx) => (
                      <div key={field.key}>
                        <div className="form_item">
                          <Input
                            name="field_seq"
                            type="number"
                            label="Field sequence (weight)"
                            list={true}
                            field={field}
                          />
                        </div>

                        <div className="form_item">
                          <Select
                            name="field_type"
                            label="Field type"
                            list={true}
                            field={field}
                            options={selectOptions}
                            onChange={(value: any) => setSelectId(value)}
                          />
                        </div>

                        {selectId === "2" && (
                          <div className="form_item">
                            <Select
                              name="select_value"
                              label="select Value"
                              list={true}
                              field={field}
                              options={[
                                { value: "1", label: "Agree" },
                                { value: "0", label: "Disagree" },
                              ]}
                            />
                          </div>
                        )}
                        <div className="form_item">
                          <Input
                            name="field_name"
                            type="text"
                            label="Field name"
                            list={true}
                            field={field}
                          />
                        </div>

                        <div className="form_item form_item_checkbox">
                          <Form.Item>
                            <Checkbox
                              onChange={(e: any) => onCheckboxChange(idx, e)}
                            >
                              Nickname is required
                            </Checkbox>
                          </Form.Item>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    htmlType="button"
                    onClick={() => {
                      add();
                      setIsMandatories((prev: any) => [...prev, false]);
                    }}
                  >
                    Add more
                  </Button>
                </>
              )}
            </Form.List>

            <Button
              type="primary"
              className="document__btn"
              htmlType="submit"
              loading={isPending}
              disabled={isPending}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </DocumentFormWrapper>
  );
};

export default DocumentForm;
