/**
 * Header Component
 *
 * The Header component represents the top section of a web page or application and typically
 * contains branding or navigation elements. In this specific implementation, it displays a title,
 * "React PDF Assistant," in a styled header bar.
 *
 * @component
 */
const Header = () => {
  return (
    <header className="w-full py-4 px-4 border-b bg-[#f4f4f4] fixed z-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="md:text-2xl font-medium">React PDF Assistant</h1>
      </div>
    </header>
  );
};

export default Header;
