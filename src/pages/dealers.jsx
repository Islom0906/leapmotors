import Image from "next/image";
import section1image1 from "/public/About-us/about us section 1.jpg";

const dealers = () => {
  return (
    <>
      <div className="relative w-full aspect-video h-[250px] flex items-center   md:h-[300px] lg:h-[400px] ">
        <Image
          src={section1image1}
          alt="OS Image"
          fill
          className="object-cover object-bottom w-full "
        />
        <div className="container mt-[60px]">
          <div className="relative z-10  text-center md:text-start  lg:w-[70%]">
            <h3 className="relative mb-5 text-xl font-bold leading-7 text-white md:text-3xl font-arial-semibold md:leading-8">
              Дилерам
            </h3>
            <p className="text-md z-10 md:text-lg text-[#4d5d81]">
              С другой стороны, укрепление и развитие внутренней структуры
              требует анализа системы массового участия. Для современного мира
              базовый вектор развития предоставляет широкие возможности для
              переосмысления внешнеэкономических политик.
            </p>
          </div>
        </div>
      </div>
      <section className="py-5 md:py-10 lg:py-20">
        <div className="container space-y-3">
          <h5 className="text-base font-bold md:text-xl">Общая информация</h5>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label
                for="helper-text"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Название предприятия *
              </label>
              <input
                type="text"
                id="helper-text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="ООО “Предприятие”"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900  "
              >
                Регион / Область *
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div>
              <label
                for="helper-text"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Адрес *
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
                Численность населения *
              </label>
              <input
                type="number"
                id="helper-text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="200 тыс человек"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h5 className="text-base font-bold md:text-xl">
                Прочая информация
              </h5>

              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Банковские реквизиты *
              </label>
              <textarea
                id="message"
                rows="8"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              ></textarea>
            </div>
            <div className="space-y-3">
              <h5 className="text-base font-bold md:text-xl">
                Наличие шоурума
              </h5>
              <div className="flex justify-between space-x-1">
                <div>
                  <label
                    for="helper-text"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Общая площадь *
                  </label>
                  <input
                    type="number"
                    id="helper-text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="кв м"
                  />
                </div>
                <div>
                  <label
                    for="helper-text"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Полезная площадь *
                  </label>
                  <input
                    type="number"
                    id="helper-text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="кв м"
                  />
                </div>
              </div>
              <h5 className="text-base font-bold md:text-xl">Наличие СТО</h5>
              <div className="flex justify-between space-x-1">
                <div>
                  <label
                    for="helper-text"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Общая площадь *
                  </label>
                  <input
                    type="number"
                    id="helper-text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="кв м”"
                  />
                </div>
                <div>
                  <label
                    for="helper-text"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Полезная площадь *
                  </label>
                  <input
                    type="number"
                    id="helper-text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="кв м”"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h5 className="text-base font-bold md:text-xl">Наличие опыта</h5>
              <div>
                <label
                  for="helper-text"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Наличие опыта в сфере торговли автомобилями *
                </label>
                <input
                  type="date"
                  id="helper-text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Выбрать год"
                />
              </div>
              <div>
                <label
                  for="helper-text"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Информация о фактически реализованных автомобилях *
                </label>
                <input
                  type="text"
                  id="helper-text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="шт"
                />
              </div>
              <div>
                <label
                  for="helper-text"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Прогноз продаж в месяц *
                </label>
                <input
                  type="number"
                  id="helper-text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="шт"
                />
              </div>
            </div>
          </div>
          <div className="grid justify-between grid-cols-1 gap-2 md:grid-cols-5">
            <div className="flex col-span-1 gap-2 md:col-span-3 ">
              <div>
                <label
                  for="helper-text"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Контактное лицо *
                </label>
                <input
                  type="text"
                  id="helper-text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Иван"
                />
              </div>
              <div>
                <label
                  for="helper-text"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Контактный номер
                </label>
                <input
                  type="number"
                  id="helper-text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="+998 (--) --- -- --"
                />
              </div>
              
            </div>
            <div className="flex items-end justify-end w-full h-full col-span-1 md:col-span-2">
                <button
                  type="button"
                  class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5  "
                >
                  Отправить
                </button>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default dealers;
