import { Accordion } from "react-bootstrap";
import { FaFile } from "react-icons/fa";

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
        <Accordion.Body>
          <S.ProductPackageInsertContent />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
