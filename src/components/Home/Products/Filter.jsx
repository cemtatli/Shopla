import { BlSelect, BlSelectOption } from "@trendyol/baklava/dist/baklava-react";

const Filter = ({ setSort }) => {
  return (
    <div className="mt-5 flex items-center justify-end rounded-md border border-gray-200 border-opacity-50 px-2 py-2">
      <select
        onChange={(event) => setSort(event.target.value)}
        className="rounded-md border border-gray-200 p-2 text-xs outline-none md:text-sm"
        label="Filtreleme Seçenekleri"
      >
        <option value="inc">Ucuzdan Pahalıya</option>
        <option value="dec">Pahalıdan Ucuza</option>
      </select>
    </div>
  );
};

export default Filter;
