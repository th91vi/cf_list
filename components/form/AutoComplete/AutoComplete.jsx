import { useState } from "react";
import Link from "next/link";
import { debounce } from "lodash";
import { Form, ListGroup } from "react-bootstrap";
import * as S from "./AutoCompĺete.styles";

import products from "../../../data/products.json";

const AutoCompleteResults = ({ results, active }) => {
  return (
    <S.ResultsList active={active}>
      {results.map((result, index) => (
        <Link key={index} href={`/product/${result.id}`} passHref>
          <ListGroup.Item>{result.medicineName}</ListGroup.Item>
        </Link>
      ))}
    </S.ResultsList>
  );
};

export const AutoComplete = () => {
  const [filteredResults, setFilteredResults] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const searchMedicineName = debounce(({ target: { value: inputValue } }) => {
    setInputValue(inputValue);

    const filteredResults = products.filter(
      (product) =>
        product.medicineName.toLowerCase().indexOf(inputValue.toLowerCase()) >
        -1
    );

    setFilteredResults(filteredResults);
  }, 1000);

  return (
    <S.AutoCompleteCard border="primary">
      <Form>
        <Form.Group id="autoComplete">
          <Form.Label>Buscar remédios</Form.Label>
          <Form.Control
            type="text"
            placeholder="Escreva o nome de um remédio"
            onChange={searchMedicineName}
          />
        </Form.Group>
      </Form>
      {filteredResults.length > 0 && (
        <AutoCompleteResults
          results={filteredResults}
          active={!!inputValue.length}
        />
      )}
    </S.AutoCompleteCard>
  );
};
