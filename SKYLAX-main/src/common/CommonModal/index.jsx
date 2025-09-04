import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";

const CommonModal = (props) => {
  return (
    <>
      <Modal
        isDismissable={props?.isDismissable}
        isKeyboardDismissDisabled={props?.isKeyboardDismissDisabled}
        backdrop={props?.backdrop}
        isOpen={props?.open}
        size={props?.size}
        placement={props?.placement}
        onOpenChange={props?.onClose}
        className={props?.className}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-2xl !leading-[-2%] font_neue_montreal_regular">
            {props?.title}
          </ModalHeader>
          <div>{props?.children}</div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CommonModal;
