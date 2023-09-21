/* eslint-disable react/prop-types */
const Message = ({ role, content }) => {
  return (
    <div className="flex items-center gap-2">
      <img
        src={`${
          role === "user"
            ? "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
            : "https://as2.ftcdn.net/v2/jpg/05/65/06/85/1000_F_565068563_jSzYovhlcrwcVTOm05akpqVdZXdoOaNE.jpg"
        } `}
        // src=""
        alt="avatar"
        width={32}
        height={32}
        className="rounded-full shrink-0"
      />
      <p
        className={`relative min-w-0 px-4 py-1 text-sm rounded-md ${
          role === "user" ? "bg-blue-500 text-white" : "bg-zinc-200"
        }`}
      >
        <span className="absolute left-[-.38rem] top-1/2">
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 0.246094C5.82471 6.23823 4.4614 9.1357 0.5 13.7461C6.61652 13.8194 9.62768 13.4401 13 10.7461L6 0.246094Z"
              fill={`${role === "user" ? "#3b82f6" : "#e4e4e7"} `}
            ></path>
          </svg>
        </span>
        <span className="block w-full min-w-0">{content}</span>
      </p>
    </div>
  );
};

export default Message;
