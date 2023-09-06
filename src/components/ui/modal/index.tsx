import { CSSProperties, useEffect, useRef } from "react";
import "./styles.css";
interface ModalProps {
  open: boolean;
  onClose: () => void;
  heading1?: string;
  heading2?: string;
  style?: CSSProperties;
  children: React.ReactNode;
  containerClasses?: string;
  modalClasses?: string;
}
const Modal = (props: ModalProps) => {
  const {
    heading1,
    heading2,
    open,
    style,
    onClose,
    containerClasses,
    modalClasses,
    children,
  } = props;
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [open]);
  const handleClose = () => {
    dialogRef.current?.close();
    onClose();
  };
  return (
    open && (
      <dialog
        style={{ ...style }}
        ref={dialogRef}
        className={`modal ${modalClasses?.length ? modalClasses : ""}`}
      >
        <div
          className={`modal_content ${
            containerClasses?.length ? containerClasses : ""
          }`}
        >
          <div className="modal_header">
            <button onClick={handleClose} className="modal_close">
              x
            </button>
            {heading1 && <span className="heading1">{heading1}</span>}
            {heading2 && <span className="heading2">{heading2}</span>}
          </div>
          <div className="modal_body">{children}</div>
        </div>
      </dialog>
    )
  );
};

export default Modal;
