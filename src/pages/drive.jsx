import Image from "next/image";

const drive = () => {

  return (
    <section className="relative min-h-screen">
      <Image
        src={"/About-us/aboutus-1.jpg"}
        fill
        className="object-cover z-7"
      />
      <div className="container relative h-full">
        <div className="relative z-10 w-full  h-screen pt-[10%]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
          <div className="px-5 py-5 space-y-5 border border-black rounded-xl h-fit drive-card md:cols-span-1">
            <ul className="flex text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow ">
              <li className="w-full">
                <button className="block w-full h-full p-2 font-bold text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none">
                  C11 REEV
                </button>
              </li>
              <li className="w-full">
                <button className="block w-full h-full p-2 font-bold bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                  C01
                </button>
              </li>
              <li className="w-full">
                <button className="block w-full h-full p-2 font-bold bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                  C11
                </button>
              </li>
              <li className="w-full">
                <button className="block w-full h-full p-2 font-bold bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300">
                  T03
                </button>
              </li>
            </ul>
            <div>
              <h5 className="mb-2 text-base font-bold md:text-xl">
                Выбор дилера
              </h5>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label
                    for="countries"
                    class="block mb-2 text-sm font-medium text-gray-900  "
                  >
                    Выберите город
                  </label>
                  <select
                    id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  >
                    <option selected>Choose a country</option>
                    <option value="US">Ташкент</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
                <div>
                  <label
                    for="countries"
                    class="block mb-2 text-sm font-medium text-gray-900  "
                  >
                    Выберите дилера
                  </label>
                  <select
                    id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  >
                    <option selected>Choose a country</option>
                    <option value="US">
                      BYD Oloy (Мирзо Улугбекский район, ул. Алой 5)
                    </option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <h5 className="mb-2 text-base font-bold md:text-xl">
              договориться о времени
              </h5>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label
                    for="countries"
                    class="block mb-2 text-sm font-medium text-gray-900  "
                  >
                    Выберите город
                  </label>
                  <select
                    id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  >
                    <option selected>Choose a country</option>
                    <option value="US">Ташкент</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
                <div>
                  <label
                    for="countries"
                    class="block mb-2 text-sm font-medium text-gray-900  "
                  >
                    Выберите дилера
                  </label>
                  <select
                    id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  >
                    <option selected>Choose a country</option>
                    <option value="US">
                      BYD Oloy (Мирзо Улугбекский район, ул. Алой 5)
                    </option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <h5 className="mb-2 text-base font-bold md:text-xl">
                Ваши данные
              </h5>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label
                    for="helper-text"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Имя
                  </label>
                  <input
                    type="text"
                    id="helper-text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="ООО “Предприятие”"
                  />
                </div>
                <div>
                  <label
                    for="helper-text"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Имя
                  </label>
                  <input
                    type="number"
                    id="helper-text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="ООО “Предприятие”"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="px-3 py-2 text-white bg-blue-500 rounded-xl hover:bg-blue-400">
              Отправить запрос
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default drive;
