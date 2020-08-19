import React from "react"

export function BlurbCommerce({
  icon,
  title,
  text,
  maxWidth,
  lists,
  isECommerce,
}) {
  return (
    <div
      className="blurbcommerce mx-auto my-5"
      style={{ maxWidth: maxWidth }}
      data-sal="fade"
      data-sal-delay="0"
      data-sal-easing="ease-out"
      data-sal-duration="1000"
    >
      <div className="blurbcommerce__img trans-scale cursor-pointer text-center">
        <img src={`/${icon}`} alt={text + " icon"} />
      </div>
      <div className="blurbcommerce__detail mt-5">
        <p
          className={`h4 text-warning title font-weight-bold font-weight-600 text-center ${
            isECommerce && "text-gagalin"
          }`}
        >
          {title}
        </p>
        <p className="text-white line-height-2 font-weight-600 text-justify">
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
                  className="text-white font-weight-500 text-justify text-check my-3"
                >
                  {list}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
