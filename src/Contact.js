import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>

      <div className="container">
        <div className="contact-form">
          <form action="" method="POST" className="contact-inputs">
            <input
              type="text"
              placeholder="User Name"
              name="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              placeholder="Email"
              name="Email"
              autoComplete="off"
              required
            />

            <textarea
              placeholder="Enter Your Message"
              name="Message"
              cols="30"
              rows="10"
              autoComplete="off"
              required
            />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;
export default Contact;
