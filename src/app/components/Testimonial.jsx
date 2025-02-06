import Image from "next/image";

export default function Example() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="flex items-center justify-center gap-2">
          <Image
            alt=""
            src="/images/favicon.png"
            className="h-14"
            width={100}
            height={100}
          />
          <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-4xl">
            <span className="text-[#7cb800]">Perfect </span>{" "}
            <span className="text-[#2478d0]">Facility</span>
          </h1>
        </div>
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>
              “As the CEO of Perfect Facility & Allied Product, my vision is to
              deliver excellence in every service we provide. We are committed
              to ensuring clean, secure, and well-maintained spaces that help
              businesses thrive. Together with our dedicated team, we strive to
              set new standards in quality and reliability.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <Image
              alt=""
              src="/images/ceo-perfect-facility.jpg"
              className="mx-auto size-10 rounded-full"
              width={100}
              height={100}
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Avinash Pathak</div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">CEO of Perfect Facility</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
