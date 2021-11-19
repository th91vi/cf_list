import { Accordion, Stack } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { ProductHighlight } from "../ProductHighlight";
import { data } from "../../../data/data";

export function Listing() {
  const {
    product: { medicineName, dosage, medicineModifier },
  } = data;
  return (
    <Accordion defaultActiveKey="0" className="mt-3">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <Stack direction="horizontal">
            <span>
              <FaSearch style={{ marginRight: "8px" }} />
            </span>
            <span>
              {medicineName} {dosage} {medicineModifier}
            </span>
          </Stack>
        </Accordion.Header>
        <Accordion.Body>
          <ProductHighlight />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
