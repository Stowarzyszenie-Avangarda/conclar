import EcoTwoToneIcon from "@material-ui/icons/EcoTwoTone";
import NotAccessibleIcon from "@mui/icons-material/NotAccessible";
import TranslateIcon from "@mui/icons-material/Translate";
import { Handshake } from "@mui/icons-material";
import {Edit} from '@mui/icons-material';

const Legend = () => {
  const iconColor = "--green-leaf-fill"; // Define a CSS variable

  return (
    <div>
      <div>{"Legenda oznaczeń przy naszych punktach programu"}</div>
      <ul
        style={{
          listStyleType: "none",
        }}
      >
        <li
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <EcoTwoToneIcon
            fontSize="large"
            style={{ color: `var(${iconColor})` }}
          />
          {"punkty przyjazne dla osób, które nigdy nie były na konwencie."}
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <NotAccessibleIcon fontSize="large" />
          {
            "punkty prowadzone w miejscu z utrudnionym dostępem dla osób z niepełnosprawnością ruchową."
          }
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <TranslateIcon fontSize="large" />
          {"punkty tłumaczone symultanicznie z języka angielskiego."}
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Handshake fontSize="large" />
          {"punkty prowadzone przez naszych sponsorów."}
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Edit fontSize="large" />
          {"punkty z możliwością wcześniejszego zapisu."}
        </li>
      </ul>
    </div>
  );
};

export default Legend;
