import { Row } from ".";
import Button from "../../components/ui/button";
import Modal from "../../components/ui/modal";
import TextInput from "../../components/ui/text_field";

const textFieldStyles = {
  width: "200px",
  height: "30px",
};

interface EditRecordProps {
  row: Row;
  isOpen: boolean;
  handleModalClose: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSaveClick: () => void;
}

const EditRecord = ({
  row,
  isOpen,
  handleModalClose,
  onChange,
  onSaveClick,
}: EditRecordProps) => {
  return (
    <Modal heading1="Edit Info" open={isOpen} onClose={handleModalClose}>
      <form>
        <div className="text_fields">
          <TextInput
            style={{ ...textFieldStyles }}
            type="text"
            placeholder="First Name"
            onChange={onChange}
            name="firstName"
            value={row.firstName}
          />
          <TextInput
            style={{ ...textFieldStyles }}
            type="text"
            placeholder="Last Name"
            onChange={onChange}
            name="lastName"
            value={row.lastName}
          />
          <TextInput
            style={{ ...textFieldStyles }}
            type="text"
            name="position"
            value={row.position}
            onChange={onChange}
          />
          <TextInput
            style={{ ...textFieldStyles }}
            type="email"
            value={row.email}
            name="email"
            onChange={onChange}
          />
        </div>
        <div className="button_group">
          <Button
            label="Cancel"
            onClick={handleModalClose}
            style={{ backgroundColor: "#dc143b" }}
          />
          <Button
            label="Save"
            style={{ backgroundColor: "#20dac2" }}
            onClick={onSaveClick}
          />
        </div>
      </form>
    </Modal>
  );
};

export default EditRecord;
