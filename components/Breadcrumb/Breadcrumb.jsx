import { Breadcrumb, Stack } from "react-bootstrap";
import { FaHome } from "react-icons/fa";

export function HeaderBreadcrumb() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Stack direction="horizontal">
          <span style={{ marginRight: "8px" }}>
            <FaHome className="mb-1" />
          </span>
          <span>Home</span>
        </Stack>
      </Breadcrumb.Item>
      <Breadcrumb.Item>Medicamentos</Breadcrumb.Item>
      <Breadcrumb.Item>Disfunção Erétil</Breadcrumb.Item>
      <Breadcrumb.Item>Viagra</Breadcrumb.Item>
      <Breadcrumb.Item active>100mg 4 Comprimido(s)</Breadcrumb.Item>
    </Breadcrumb>
  );
}
