import { Accordion } from "react-bootstrap";
import { FaFile } from "react-icons/fa";
import { viagraPackageInsertData } from "../../../../data/viagraPackageInsert";

import * as S from "./ProductPackageInsert.styles";

export function ProductPackageInsert({
  product: { medicineName, medicineModifier, manufacturer },
}) {
  return (
    <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <h6>
            <FaFile /> {medicineName} {medicineModifier} - {manufacturer}
          </h6>
        </Accordion.Header>
        <S.StyledAcordion>
          <div dangerouslySetInnerHTML={viagraPackageInsertData} />
        </S.StyledAcordion>
      </Accordion.Item>
    </Accordion>
  );
}
