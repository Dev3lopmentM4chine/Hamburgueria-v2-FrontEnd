import image1 from "../../img/hamburgueria-illustration-1.png";
import image2 from "../../img/hamburgueria-illustration-2.png";
import { Logo } from "../Logo";
import { StyledIllustratrionBox, StyledCard } from "./style";

export const IllustrationBox = () => {
  return (
    <StyledIllustratrionBox>
      <Logo />

      <StyledCard>
        <figure>
          <img src={image2} alt="Logo da empresa" />
        </figure>

        <div>
          <p>
            A vida é como um sanduíche, é preciso recheá-la com os{" "}
            <span>melhores </span>
            ingredientes.
          </p>
        </div>
      </StyledCard>

      <figure className="illustration">
        <img src={image1} alt="Ilustração de bolinhas" />
      </figure>
    </StyledIllustratrionBox>
  );
};
