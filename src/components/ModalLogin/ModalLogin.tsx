import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import "./modalLogin.style";
import {
  BtnAndNewPassword,
  BtnClose,
  BtnSubmit,
  ContainerInput,
  ContainerModal,
  Form,
  H2,
  Input,
  Label,
  Login,
  Modal,
  NewPassword,
  Register,
} from "./modalLogin.style";
import { Divider } from "@mui/material";

type ModalLoginProps = {
  setOpenModalLogin: (value: boolean) => void;
};

const ModalLogin = ({ setOpenModalLogin }: ModalLoginProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <ContainerModal onClick={() => setOpenModalLogin(false)}>
      <BtnClose>
        <IoMdClose onClick={() => setOpenModalLogin(false)} />
      </BtnClose>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Login>
          <H2>Entrar</H2>
          <Form>
            <ContainerInput>
              <Label>Nome de usuario ou e-mail*</Label>
              <Input type="text" required />
            </ContainerInput>
            <ContainerInput>
              <Label>Senha*</Label>
              <Input type="password" required />
            </ContainerInput>

            <BtnAndNewPassword>
              <BtnSubmit>Acessar</BtnSubmit>
              <NewPassword href="#">Perdeu sua senha?</NewPassword>
            </BtnAndNewPassword>
          </Form>
        </Login>
        <Divider
          orientation="vertical"
          style={{ height: "auto", borderColor: "#fff" }}
        />
        <Register>
          <H2>Cadastre-se</H2>
          <Form>
            <ContainerInput>
              <Label>Nome de usuario *</Label>
              <Input type="text" required />
            </ContainerInput>
            <ContainerInput>
              <Label>Endereço de e-mail *</Label>
              <Input type="text" required />
            </ContainerInput>
            <ContainerInput>
              <Label>Senha *</Label>
              <Input type="password" required />
            </ContainerInput>
            <BtnSubmit>Cadastre-se</BtnSubmit>
          </Form>
        </Register>
      </Modal>
    </ContainerModal>
  );
};

export default ModalLogin;
