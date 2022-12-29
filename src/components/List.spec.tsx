import userEvent from "@testing-library/user-event";

import { queryByText, render, renderHook } from "@testing-library/react";
import List from "./List";

describe("App component", () => {
  it("Deve ter uma lista de nomes", async () => {
    const { getByText } = render(
      <List initialItems={["Kriguer", "Vanni", "Erick"]} />
    );

    expect(getByText("Kriguer")).toBeInTheDocument();
    expect(getByText("Vanni")).toBeInTheDocument();
    expect(getByText("Erick")).toBeInTheDocument();
  });

  it("Deve adicionar um novo item a lista", async () => {
    const { getByText, getByLabelText, debug, queryByText } = render(
      <List initialItems={[]} />
    );

    const addButton = getByText("Adicionar");

    const inputText = getByLabelText("add-name");

    await userEvent.type(inputText, "Novo");

    await userEvent.click(addButton);

    expect(queryByText("Novo")).toBeInTheDocument();
  });

  it("Deve remover um dos itens da lista", async () => {
    const { getAllByText, queryByText } = render(
      <List initialItems={["Kriguer"]} />
    );

    const removeButtons = getAllByText("Remover");

    await userEvent.click(removeButtons[0]);

    expect(queryByText("Kriguer")).not.toBeInTheDocument();
  });
});
