import Button from "../../components/ui/button";
import Modal from "../../components/ui/modal";
import TextInput from "../../components/ui/text_field";

const textFieldStyles = {
  width: "200px",
  height: "30px",
};

interface AddRecordProps {
  row: {
    firstName: string;
    lastName: string;
    position: string;
    department: string;
    email: string;
  };
  isOpen: boolean;
  handleModalClose: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddUser: () => void;
}

const AddRecord = ({
  row,
  onChange,
  isOpen,
  handleModalClose,
  onAddUser,
}: AddRecordProps) => {
  return (
    <Modal heading1="Add Employee" open={isOpen} onClose={handleModalClose}>
      <form>
        <div className="text_fields">
          <TextInput
            name="firstName"
            placeholder="First Name"
            value={row.firstName}
            onChange={onChange}
            style={{ ...textFieldStyles }}
          />
          <TextInput
            name="lastName"
            placeholder="Last Name"
            value={row.lastName}
            onChange={onChange}
            style={{ ...textFieldStyles }}
          />
          <TextInput
            name="position"
            placeholder="Position"
            value={row.position}
            onChange={onChange}
            style={{ ...textFieldStyles }}
          />
          <TextInput
            name="department"
            placeholder="Dept."
            value={row.department}
            onChange={onChange}
            style={{ ...textFieldStyles }}
          />
          <TextInput
            name="email"
            placeholder="Email"
            type="email"
            value={row.email}
            style={{ ...textFieldStyles }}
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
            onClick={onAddUser}
            style={{ backgroundColor: "#20dac2" }}
          />
        </div>
      </form>
    </Modal>
  );
};

export default AddRecord;
