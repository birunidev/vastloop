import React from "react"

export function BlurbCommerce({
  icon,
  title,
  text,
  maxWidth = "auto",
  lists,
  isECommerce,
}) {
  return (
    <div
      className="blurbcommerce row align-items-center mx-auto my-5"
      style={{ maxWidth: maxWidth }}
    >
      <div
        className="col-md-6"
        data-sal="slide-right"
        data-sal-delay="0"
        data-sal-easing="ease-out"
        data-sal-duration="1000"
      >
        <div className="blurbcommerce__img cursor-pointer text-left">
          <img src={`/${icon}`} className="img-fluid" alt={text + " icon"} />
        </div>
      </div>
      <div
        className="col-md-6"
        data-sal="slide-left"
        data-sal-delay="0"
        data-sal-easing="ease-out"
        data-sal-duration="1000"
      >
        <div className="blurbcommerce__detail ">
          <p
            className={`h4 text-warning title font-weight-bold font-weight-600 text-left ${
              isECommerce && "text-gagalin"
            }`}
          >
            {title}
          </p>
          <p className="text-white line-height-2 font-weight-600 text-justify text-pre-line">
            {text}
          </p>
        </div>
        {lists && (
          <div className="blurbcommerce__list mt-4">
            <ul>
              {lists.map((list, index) => {
                return (
                  <li
                    key={index}
                    className="text-white font-weight-500 d-flex justify-content-between w-75"
                  >
                    <span className="mr-3">{list}</span>
                    <img src="/check.svg" width={35} alt="Check Icon" />
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
