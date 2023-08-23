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
                    Выберите регион
                  </label>
                  <select
                    id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  >
                    <option selected>Выберите регион</option>
                    <option value="">Ташкент</option>
                    <option value="">Андижан</option>
                    <option value="">Бухара</option>
                    <option value="">Фергана</option>
                    <option value="">Жиззах</option>
                    <option value="">Хоразм</option>
                    <option value="">Наманган</option>
                    <option value="">Навоий</option>
                    <option value="">Қашқадарё</option>
                    <option value="">Қорақалпоғистон</option>
                    <option value="">Самарқанд</option>
                    <option value="">Сирдарё</option>
                    <option value="">Сурхондарё</option>
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
                    <option selected>Выберите дилеров</option>
                    <option value="US">
                      Парковка рынка Олой
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <h5 className="mb-2 text-base font-bold md:text-xl">
                Договориться о времени
              </h5>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label
                    for="countries"
                    class="block mb-2 text-sm font-medium text-gray-900  "
                  >
                    Выберите день
                  </label>
                  <select
                    id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  >
                    <option selected>Выберите день</option>
                    <option value="">Воскресенье</option>
                    <option value="">Понедельник</option>
                    <option value="">Вторник</option>
                    <option value="">Среда</option>
                    <option value="">Четверг</option>
                    <option value="">Пятница</option>
                    <option value="">Суббота
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    for="countries"
                    class="block mb-2 text-sm font-medium text-gray-900  "
                  >
                    Выберите время
                  </label>
                  <select
                    id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  >
                    <option selected>Выберите время</option>
                    <option value="CA">09:00-09:30</option>
                    <option value="CA">09:30-10:00</option>
                    <option value="CA">10:00-10:30</option>
                    <option value="CA">10:30-11:00</option>
                    <option value="CA">11:00-11:30</option>
                    <option value="CA">11:30-12:00</option>
                    <option value="CA">12:00-12:30</option>
                    <option value="CA">12:30-13:00</option>
                    <option value="CA">13:00-13:30</option>
                    <option value="CA">13:30-14:00</option>
                    <option value="CA">14:00-14:30</option>
                    <option value="CA">14:30:15:00</option>
                    <option value="CA">15:30:16:00</option>
                    <option value="CA">16:00:16:30</option>
                    <option value="CA">16:30-17:00</option>
                    <option value="CA">17:00-17:30</option>
                    <option value="CA">17:30-18:00</option>
                    <option value="CA">18:00-18:30</option>
                    <option value="CA">18:30-19:00</option>
                    <option value="CA">19:00-19:30</option>
                    <option value="CA">19:30-20:00</option>
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
                    Телефон
                  </label>
                  <input
                    type="number"
                    id="helper-text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="+(998) "
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
