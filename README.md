# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

expandir o search durante o hover



###################3
<div>
    <Container>
        <Swiper
          className="hidden md:flex items-center mt-3 justify-center"
          loop={true}
          autoplay={{ delay: 2000 }}
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          spaceBetween={50}
          pagination={true}
          navigation={true}
          slidesPerView={1}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <SwiperSlide key={i} className="rounded-lg">
              <div className="relative md:w-[88vw] md:h-[480px] md:mx-auto w-full h-full  ">
                <img
                  src={"/banner/banner.png"}
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                  alt=""
                />
                <div className="absolute max-w-[280px] flex-col top-1/3 right-24 flex items-start justify-center">
                  <h3 className="text-vermelho text-3xl font-bold">
                    Lorem ipsum dolor sit
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum odit recusandae ducimus...
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="hidden px-6">
          <Carousel
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {Array.from({ length: 4 }).map((_, i) => (
                <CarouselItem key={i}>
                  <img
                    src="/banner/banner.png"
                    className="object-cover"
                    alt="banner"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselNext />
          <CarouselPrevious /> */}
          </Carousel>
        </div>
      </Container>
</div>

############# FOOTER ###############

<footer className="relative bottom-0 mt-24 w-full pt-12 bg-black/20 rounded-t-2xl">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="absolute md:flex hidden flex-col justify-center items-center -top-14 right-1/2 text-vermelho"
      >
        <CiDesktopMouse2 size={26} />
        <IoIosArrowRoundDown size={24} />
      </div>

      <motion.section
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        variants={footer_animation}
        initial="initial"
        animate={hovered ? "animate" : "initial"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full px-12 overflow-hidden hidden h-0 md:flex mx-auto items-center justify-center space-x-8"
      >
        <div className="w-full flex items-start justify-center space-x-16">
          <div>
            <h1 className="text-vermelho text-base font-bold capitalize">
              {FOOTER_LINKS[0].title}
            </h1>
            <ul>
              {FOOTER_LINKS[0].texts.map((text, index) => (
                <li
                  className="text-black/50 capitalize text-[12px]"
                  key={index}
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col space-y-6">
            <div>
              <h1 className="text-vermelho text-base font-bold capitalize">
                {FOOTER_LINKS[1].title}
              </h1>
              <ul>
                {FOOTER_LINKS[1].texts.map((text, index) => (
                  <li
                    className="text-black/50 capitalize text-[12px]"
                    key={index}
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="text-vermelho text-base font-bold capitalize">
                {FOOTER_LINKS[2].title}
              </h1>
              <ul>
                {FOOTER_LINKS[2].texts.map((text, index) => (
                  <li
                    className="text-black/50 capitalize text-[12px]"
                    key={index}
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <div>
              <h1 className="text-vermelho text-base font-bold capitalize">
                {FOOTER_LINKS[3].title}
              </h1>
              <ul>
                {FOOTER_LINKS[3].texts.map((text, index) => (
                  <li
                    className="text-black/50  capitalize text-[12px]"
                    key={index}
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="text-vermelho text-base font-bold capitalize">
                {FOOTER_LINKS[4].title}
              </h1>
              <ul>
                {FOOTER_LINKS[4].texts.map((text, index) => (
                  <li
                    className="text-black/50 line-clamp-2 capitalize text-[12px]"
                    key={index}
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="md:w-[800px] md:space-x-6 grid grid-cols-2 place-items-center md:flex md:items-center md:justify-center mx-auto h-32">
        {/**first col */}
        <div className="flex flex-col">
          <div className="flex space-x-2 text-[14px] items md:items-center">
            <span className="text-vermelho">
              <TbWorld />
            </span>
            <span>info@abanc.ao</span>
          </div>

          <div className="flex space-x-2  text-[14px] items-center">
            <span className="text-vermelho">
              <FiPhone />
            </span>
            <span>222 712 228</span>
          </div>
        </div>

        {/**second col */}
        <div className="flex items-center justify-center space-x-3">
          <div className="text-vermelho">
            <LuMapPin size={20} />
          </div>

          <div className="w-full flex items-start text-[14px]  flex-col capitalize">
            <span>travessa ho chi mihn,</span>
            <span>edifício garden</span>
          </div>
        </div>

        {/**third col */}
        <div className="flex items-center text-[14px] justify-center md:space-x-3">
          <div className="text-vermelho">
            <LuMapPin size={20} />
          </div>

          <div className="w-full flex items-start flex-col capitalize">
            <span>torre b, piso 17, maianga,</span>
            <span>luanda, angola</span>
          </div>
        </div>

        {/**fourth col */}
        <div className="flex flex-col text-[14px]  items-start space-y-2 ml-12">
          <h1 className="capitalize text-vermelho font-bold">
            partilhe este site
          </h1>
          <ul className="flex items-start space-x-3">
            {SOCIAL_MEDIAS.map((social, index) => (
              <li key={index}>
                <Link to={social.url}>{social.icon}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-vermelho text-[8px] md:text-[12px] justify-center space-x-6 md:space-x-12 text-white items-center w-full h-[40px] flex">
        <p>&copy;ABANC 2024 Todos os direitos reservados</p>
        <p>Política de Privacidade</p>
        <p>Política de cookies</p>
        <p>Cancelar newsletter</p>
        <p>Cancelar newsletter</p>
      </section>
    </footer>