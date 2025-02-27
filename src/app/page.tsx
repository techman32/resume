import Image from 'next/image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTelegram} from '@fortawesome/free-brands-svg-icons/faTelegram'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons/faLocationDot'
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub'

export default function Home() {
  return (
    <div
      className={'relative overflow-hidden flex items-center flex-col py-8 px-4 md:mx-4 md:my-6 md:rounded-2xl lg:px-8 lg:mx-12 xl:mx-32 xl:max-w-screen-xl 2xl:mx-auto bg-black/80 md:bg-black/60 backdrop-blur-md shadow-lg'}
    >
      <span className={'absolute w-screen h-48 bg-purple-500 -top-16 opacity-100 blur-3xl'}></span>
      <span className={'absolute w-1/3 -left-20 h-32 bg-amber-50 rounded-full -top-8 opacity-100 blur-3xl'}></span>
      <div className={'relative overflow-hidden h-48 w-48 rounded-full mb-8'}>
        <Image src="/me.jpg" alt="Фотография меня" fill className="object-cover"/>
      </div>
      <h1 className={'text-3xl font-bold mb-4'}>Клочко Александр</h1>
      <p className={'bg-purple-600 py-2 px-4 rounded-lg'}>Fullstack Developer</p>

      <div className={'mt-6 flex flex-col items-center gap-4 md:flex-row'}>
        <div className={'flex justify-center flex-wrap gap-4'}>
          <div className={'flex'}>
            <FontAwesomeIcon icon={faTelegram} className={'h-6 w-6'}/>
            <p className={'ml-2 hover:underline underline-offset-4'}>
              <a href="https://t.me/techman32" target={'_blank'}>techman32</a>
            </p>
          </div>
          <div className={'flex'}>
            <FontAwesomeIcon icon={faGithub} className={'h-6 w-6'}/>
            <p className={'ml-2 hover:underline underline-offset-4'}>
              <a href={'https://github.com/techman32'} target={'_blank'}>techman32</a>
            </p>
          </div>
          <div className={'flex'}>
            <FontAwesomeIcon icon={faEnvelope} className={'h-6 w-6'}/>
            <p className={'ml-2 hover:underline underline-offset-4'}>
              <a href={'mailto:klochko977@gmail.com'}>klochko977@gmail.com</a>
            </p>
          </div>
          <div className={'flex'}>
            <FontAwesomeIcon icon={faLocationDot} className={'h-6 w-6'}/>
            <p className={'ml-2 hover:underline underline-offset-4'}>
              <a href="https://yandex.ru/maps/41/yoshkar-ola/" target={'_blank'}>Россия, Йошкар-Ола</a>
            </p>
          </div>
        </div>
      </div>

      <div className={'border-t border-gray-400 mt-4 pt-4 w-full md:mt-6 md:pt-6'}>
        <div className={'flex flex-col gap-4 lg:flex-row-reverse'}>
          <div className={'lg:w-[50%] lg:border-l border-gray-400 lg:pl-8'}>
            <h2 className={'text-2xl font-bold mb-2'}>Навыки и инструменты</h2>
            <h3 className={'text-lg font-bold mb-2'}>Языки программирования</h3>
            <ul className={'flex gap-2 flex-wrap mb-4'}>
              <li className={'bg-gray-600/60 rounded-lg px-2 py-1'}>JavaScript</li>
              <li className={'bg-gray-600/60 rounded-lg px-2 py-1'}>TypeScript</li>
              <li className={'bg-gray-600/60 rounded-lg px-2 py-1'}>PHP</li>
              <li className={'bg-gray-600/60 rounded-lg px-2 py-1'}>HTML</li>
              <li className={'bg-gray-600/60 rounded-lg px-2 py-1'}>SCSS/Tailwind</li>
            </ul>
            <h3 className={'text-lg font-bold mb-2'}>Фреймворки и библиотеки</h3>
            <ul className={'flex gap-2 flex-wrap mb-4'}>
              <li className={'bg-gray-600/60 rounded-lg px-2 py-1'}>Next.js (React)</li>
              <li className={'bg-gray-600/60 rounded-lg px-2 py-1'}>Node.js (Express)</li>
              <li className={'bg-gray-600/60 rounded-lg px-2 py-1'}>PostgreSQL</li>
              <li className={'bg-gray-600/60 rounded-lg px-2 py-1'}>Sequelize ORM</li>
            </ul>
            <h3 className={'text-lg font-bold mb-2'}>Инструменты</h3>
            <ul className={'flex gap-2 flex-wrap mb-4'}>
              <li className={'bg-gray-600/60 rounded-lg px-2 py-1'}>Visual Studio Code</li>
              <li className={'bg-gray-600/60 rounded-lg px-2 py-1'}>WebStorm</li>
            </ul>
          </div>
          <div className={'lg:w-[50%]'}>
            <div>
              <h2 className={'text-2xl font-bold mb-2'}>Обо мне</h2>
              <p className={'mb-2'}>Активно изучаю стек React и Node.js с TypeScript, развиваю навыки в разработке SPA-приложений и
                серверных API. Ориентирован на качество кода, удобство пользователей и эффективные архитектурные
                решения. Люблю разбираться в сложных задачах, тестировать новые технологии и автоматизировать
                процессы.
              </p>
              <p>Готов к работе в команде, открыт к обучению и новым вызовам.</p>
            </div>
            <div>
              <h2 className={'text-2xl font-bold mb-2 mt-4'}>Образование</h2>
              <h3 className={'text-lg font-bold'}>Поволжский государственный технологичнский универсистет
                (Волгатех)</h3>
              <span className={'text-white/50 mb-2 block'}>2021 – 2025</span>
              <p className={'font-bold'}>Проекты</p>
              <ul>
                <li className={'relative flex flex-col justify-center'}>
                  <div className={'flex items-center'}>
                    <span className={'absolute w-2 h-2 bg-purple-500 rounded-full'}/>
                    <span className={'pl-4'}>Разработка аналога LinkedIn</span>
                  </div>
                  <span className={'text-white/50 pl-4 text-xs'}>React (Next.js), PostgreSQL, Sequielize ORM, TypeScript, Tailwind</span>
                </li>
                <li className={'relative flex flex-col justify-center'}>
                  <div className={'flex items-center'}>
                    <span className={'absolute w-2 h-2 bg-purple-500 rounded-full'}/>
                    <span className={'pl-4'}>Разработка сервиса для HR по тестированию сотрудников</span>
                  </div>
                  <span className={'text-white/50 pl-4 text-xs'}>React, Node.js (Express), PostgreSQL, Sequielize ORM, TypeScript, SCSS</span>
                </li>
                <li className={'relative flex flex-col justify-center'}>
                  <div className={'flex items-center'}>
                    <span className={'absolute w-2 h-2 bg-purple-500 rounded-full'}/>
                    <span className={'pl-4'}>Разработка некастодиального web3 кошелька на блокчейне Solana</span>
                  </div>
                  <span className={'text-white/50 pl-4 text-xs'}>React Native, Node.js (Express), PostgreSQL, Sequielize ORM, TypeScript, CSS, @solana/web3.js</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className={'text-2xl font-bold mb-2 mt-4'}>Опыт работы</h2>
              <h3 className={'text-lg font-bold'}>iSpring</h3>
              <span className={'text-white/50 mb-2 block'}>Август 2022 – Октябрь 2024</span>
              <ul>
                <li className={'relative flex items-center'}>
                  <span className={'absolute w-2 h-2 bg-purple-500 rounded-full'}/>
                  <span
                    className={'pl-4'}>Верстал лендинги по макетам из Figma, используя HTML и препроцессор SCSS</span>
                </li>
                <li className={'relative flex items-center'}>
                  <span className={'absolute w-2 h-2 bg-purple-500 rounded-full'}/>
                  <span className={'pl-4'}>Реализовывал анимации и интерактивные элементы с помощью JavaScript</span>
                </li>
                <li className={'relative flex items-center'}>
                  <span className={'absolute w-2 h-2 bg-purple-500 rounded-full'}/>
                  <span className={'pl-4'}>Настраивал обработку и валидацию форм на фронтенде (JavaScript) и бэкенде (PHP)</span>
                </li>
                <li className={'relative flex items-center'}>
                  <span className={'absolute w-2 h-2 bg-purple-500 rounded-full'}/>
                  <span className={'pl-4'}>Реализовывал регистрацию и авторизацию через социальные сети на PHP</span>
                </li>
                <li className={'relative flex items-center'}>
                  <span className={'absolute w-2 h-2 bg-purple-500 rounded-full'}/>
                  <span className={'pl-4'}>Интегрировал данные инфоблоков из административной панели Bitrix на страницы сайта</span>
                </li>
                <li className={'relative flex items-center'}>
                  <span className={'absolute w-2 h-2 bg-purple-500 rounded-full'}/>
                  <span
                    className={'pl-4'}>Разрабатывал мультиязычные страницы с использованием шаблонизатора Twig</span>
                </li>
                <li className={'relative flex items-center'}>
                  <span className={'absolute w-2 h-2 bg-purple-500 rounded-full'}/>
                  <span className={'pl-4'}> Тестировал API и формы через Postman</span>
                </li>
                <li className={'relative flex items-center'}>
                  <span className={'absolute w-2 h-2 bg-purple-500 rounded-full'}/>
                  <span className={'pl-4'}>Составлял технические задания в YouTrack</span>
                </li>
                <li className={'relative flex items-center'}>
                  <span className={'absolute w-2 h-2 bg-purple-500 rounded-full'}/>
                  <span className={'pl-4'}>Проводил код-ревью в Upsource и JetBrains Space</span>
                </li>
                <li className={'relative flex items-center'}>
                  <span className={'absolute w-2 h-2 bg-purple-500 rounded-full'}/>
                  <span className={'pl-4'}>Верстал и настраивал логику блога используя Wordpress</span>
                </li>
                <li className={'relative flex items-center'}>
                  <span className={'absolute w-2 h-2 bg-purple-500 rounded-full'}/>
                  <span className={'pl-4'}>Настраивал отправку событий в Google Tag Manager</span>
                </li>
                <li className={'relative flex items-center'}>
                  <span className={'absolute w-2 h-2 bg-purple-500 rounded-full'}/>
                  <span
                    className={'pl-4'}>Работал с библиотеками micromodal, intlTelInput, freshchat, tiny/owl slider</span>
                </li>
                <li className={'relative flex items-center'}>
                  <span className={'absolute w-2 h-2 bg-purple-500 rounded-full'}/>
                  <span className={'pl-4'}>Настраивал A/B тестирование</span>
                </li>
                <li className={'relative flex items-center'}>
                  <span className={'absolute w-2 h-2 bg-purple-500 rounded-full'}/>
                  <span className={'pl-4'}>Наставлял двух стажеров, успешно прошедших испытательный срок</span>
                </li>
                <li className={'relative flex items-center'}>
                  <span className={'absolute w-2 h-2 bg-purple-500 rounded-full'}/>
                  <span className={'pl-4'}> Руководил командой из четырех разработчиков-студентов при создании браузерной игры</span>
                </li>
                <li className={'relative flex items-center'}>
                  <span className={'absolute w-2 h-2 bg-purple-500 rounded-full'}/>
                  <span className={'pl-4'}>Запускал новый RTL-проект на CMS Bitrix</span>
                </li>
                <li className={'relative flex items-center'}>
                  <span className={'absolute w-2 h-2 bg-purple-500 rounded-full'}/>
                  <span className={'pl-4'}>Настраивал локальную среду разработки с использованием Docker</span>
                </li>
                <li className={'relative flex items-center'}>
                  <span className={'absolute w-2 h-2 bg-purple-500 rounded-full'}/>
                  <span className={'pl-4'}>Проверял лабораторные работы студентов по веб-разработке</span>
                </li>
                <li className={'relative flex items-center'}>
                  <span className={'absolute w-2 h-2 bg-purple-500 rounded-full'}/>
                  <span className={'pl-4'}>Читал лекции по Flex и адаптивный верстке</span>
                </li>
                <li className={'relative flex items-center'}>
                  <span className={'absolute w-2 h-2 bg-purple-500 rounded-full'}/>
                  <span className={'pl-4'}>Лидил команду из трех разработчиков</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}