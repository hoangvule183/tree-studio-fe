export default function Contact() {
  const desktop = () => (
    <div className="w-screen h-screen max-md:hidden overflow-y-scroll">
      <img
        src="/images/contact/banner-desktop.png"
        className="w-screen h-screen object-cover"
      />
      <div className="absolute top-[25%] left-[68%] text-balance select-none text-[rgba(42,28,87,1)] flex flex-col gap-[10px]">
        <div className="pl-[35px]">
          <p className="text-bold">Let's make magic!</p>
          <p>Tree Studios</p>
        </div>
        <div className="flex gap-[5px] items-center">
          <img src="/images/icons/mail.png" className="w-[30px]" />
          <a href="mailto:info@tree.net.vn" className="hover:underline">
            info@tree.net.vn
          </a>
        </div>
        <div className="flex gap-[5px] items-center">
          <img src="/images/icons/phone.png" className="w-[30px]" />
          <div className="flex flex-col">
            <a href="tel:+84907677222" className="hover:underline">
              (+84)907 677 222 (Kei)
            </a>
            <a href="tel:+84938841562" className="hover:underline">
              (+84)938 841 562 (Thao)
            </a>
          </div>
        </div>
        <div className="flex gap-[5px] items-center">
          <img src="/images/icons/map.png" className="w-[30px]" />
          <p>Ho Chi Minh, Viet Nam</p>
        </div>
      </div>
    </div>
  );

  const mobile = () => (
    <div className="w-screen h-screen md:hidden">
      <div className="w-screen h-screen">
        <img
          src="/images/contact/banner-mobile.jpg"
          className="w-screen h-screen object-cover"
        />
        <div className="absolute w-screen h-screen top-0 left-0 pt-[100px] items-center text-balance select-none text-[rgba(42,28,87,1)] flex flex-col">
          <div className="w-[70%] text-[1.05rem] flex flex-col gap-[20px]">
          <div className="pl-[35px]">
            <p className="text-bold">Let's make magic!</p>
            <p>Tree Studios</p>
          </div>
          <div className="flex gap-[5px] items-center">
            <img src="/images/icons/mail.png" className="w-[30px]" />
            <a href="mailto:info@tree.net.vn" className="hover:underline">
              info@tree.net.vn
            </a>
          </div>
          <div className="flex gap-[5px] items-center">
            <img src="/images/icons/phone.png" className="w-[30px]" />
            <div className="flex flex-col">
              <a href="tel:+84907677222" className="hover:underline">
                (+84)907 677 222 (Kei)
              </a>
              <a href="tel:+84938841562" className="hover:underline">
                (+84)938 841 562 (Thao)
              </a>
            </div>
          </div>
          <div className="flex gap-[5px] items-center">
            <img src="/images/icons/map.png" className="w-[30px]" />
            <p>Ho Chi Minh, Viet Nam</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {desktop()}
      {mobile()}
    </>
  );
}
