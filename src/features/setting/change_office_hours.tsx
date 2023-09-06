import Button from "../../components/ui/button";
import Modal from "../../components/ui/modal";
import TextInput from "../../components/ui/text_field";

const textFieldStyles = {
  width: "300px",
  height: "30px",
};

interface ChangeOfficeHoursProps {
  row: {
    startTime: string;
    finishTime: string;
    workHours: string;
  };
  isOpen: boolean;
  handleModalClose: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const ChangeOfficeHours = ({
  row,
  isOpen,
  handleModalClose,
  onChange,
}: ChangeOfficeHoursProps) => {
  return (
    <Modal
      heading1="Change Office Hours"
      open={isOpen}
      onClose={handleModalClose}
    >
      <form>
        <div className="text_fields">
          <TextInput
            style={{ ...textFieldStyles }}
            type="time"
            placeholder="Start Hours"
            onChange={onChange}
            name="startHours"
            value={row.startTime}
          />
          <TextInput
            type="time"
            style={{ ...textFieldStyles }}
            name="finishHours"
            value={row.finishTime}
            onChange={onChange}
          />
          <TextInput
            style={{ ...textFieldStyles }}
            value={row.workHours}
            name="workHours"
            type="number"
            onChange={onChange}
          />
        </div>
        <div className="button_group">
          <Button
            label="Cancel"
            onClick={handleModalClose}
            style={{ backgroundColor: "#dc143b" }}
          />
          <Button label="Save" style={{ backgroundColor: "#20dac2" }} />
        </div>
      </form>
    </Modal>
  );
};

export default ChangeOfficeHours;
