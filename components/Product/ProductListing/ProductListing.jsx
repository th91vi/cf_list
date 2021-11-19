import { Accordion, Stack } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { ProductHighlight } from "../ProductHighlight";
import { data } from "../../../data/data";
import { ProductItem } from "../ProductItem";

export function Listing() {
  const {
    product: { medicineName, dosage, medicineModifier },
    deals,
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
          <h2 className="text-center my-3">Ofertas encontradas</h2>
          {deals.map((deal, index) => (
            <ProductItem key={index} deal={deal} />
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
