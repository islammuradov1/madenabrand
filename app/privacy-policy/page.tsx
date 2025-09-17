import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="font-sans text-gray-600">
      {/* Logo */}
      <div
        className="block mx-auto mb-12 w-[178px] h-[38px]"
        style={{
          background: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAxNzggMzgiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRDFEMUQxIiBkPSJNNC4yODMgMjQuMTA3Yy0uNzA1IDAtMS4yNTgtLjI1Ni0xLjY2LS43NjhoLS4wODVjLjA1Ny41MDIuMDg2Ljc5Mi4wODYuODd2Mi40MzRILjk4NXYtOC42NDhoMS4zMzJsLjIzMS43NzloLjA3NmMuMzgzLS41OTQuOTUtLjg5MiAxLjcwMi0uODkyLjcxIDAgMS4yNjQuMjc0IDEuNjY1LjgyMi40MDEuNTQ4LjYwMiAxLjMwOS42MDIgMi4yODMgMCAuNjQtLjA5NCAxLjE5OC0uMjgyIDEuNjctLjE4OC40NzMtLjQ1Ni44MzMtLjgwMyAxLjA4LS4zNDcuMjQ3LS43NTYuMzctMS4yMjUuMzd6TTMuOCAxOS4xOTNjLS40MDUgMC0uNy4xMjQtLjg4Ni4zNzMtLjE4Ny4yNDktLjI4My42Ni0uMjkgMS4yMzN2LjE3N2MwIC42NDUuMDk1IDEuMTA3LjI4NyAxLjM4Ni4xOTIuMjguNDk1LjQxOS45MS40MTkuNzM0IDAgMS4xMDEtLjYwNSAxLjEwMS0xLjgxNiAwLS41OS0uMDktMS4wMzQtLjI3LTEuMzI5LS4xODItLjI5NS0uNDY1LS40NDMtLjg1Mi0uNDQzem01LjU3IDEuNzk0YzAgLjU5NC4wOTggMS4wNDQuMjkzIDEuMzQ4LjE5Ni4zMDQuNTEzLjQ1Ny45NTQuNDU3LjQzNyAwIC43NS0uMTUyLjk0Mi0uNDU0LjE5Mi0uMzAzLjI4OC0uNzUzLjI4OC0xLjM1MSAwLS41OTUtLjA5Ny0xLjA0LS4yOS0xLjMzOC0uMTk0LS4yOTctLjUxLS40NDUtLjk1LS40NDUtLjQzOCAwLS43NTMuMTQ3LS45NDYuNDQzLS4xOTQuMjk1LS4yOS43NDItLjI5IDEuMzR6bTQuMTUzIDBjMCAuOTc3LS4yNTggMS43NDItLjc3NCAyLjI5My0uNTE1LjU1Mi0xLjIzMy44MjctMi4xNTQuODI3LS41NzYgMC0xLjA4NS0uMTI2LTEuNTI1LS4zNzhhMi41MiAyLjUyIDAgMCAxLTEuMDE1LTEuMDg4Yy0uMjM3LS40NzMtLjM1NS0xLjAyNC0uMzU1LTEuNjU0IDAtLjk4MS4yNTYtMS43NDQuNzY4LTIuMjg4LjUxMi0uNTQ1IDEuMjMyLS44MTcgMi4xNi0uODE3LjU3NiAwIDEuMDg1LjEyNiAxLjUyNS4zNzYuNDQuMjUxLjc3OS42MSAxLjAxNSAxLjA4LjIzNi40NjkuMzU1IDEuMDE5LjM1NSAxLjY0OXpNMTkuNzEgMjRsLS40NjItMi4xLS42MjMtMi42NTNoLS4wMzdMMTcuNDkzIDI0SDE1LjczbC0xLjcwOC02LjAwNWgxLjYzM2wuNjkzIDIuNjU5Yy4xMS40NzYuMjI0IDEuMTMzLjMzOCAxLjk3MWguMDMyYy4wMTUtLjI3Mi4wNzctLjcwNC4xODgtMS4yOTRsLjA4Ni0uNDU3Ljc0Mi0yLjg3OWgxLjgwNGwuNzA0IDIuODc5Yy4wMTQuMDc5LjAzNy4xOTUuMDY3LjM1YTIwLjk5OCAyMC45OTggMCAwIDEgLjE2NyAxLjAwMmMuMDIzLjE2NS4wMzYuMjk5LjA0LjM5OWguMDMyYy4wMzItLjI1OC4wOS0uNjExLjE3Mi0xLjA2LjA4Mi0uNDUuMTQxLS43NTQuMTc3LS45MTFsLjcyLTIuNjU5aDEuNjA2TDIxLjQ5NCAyNGgtMS43ODN6bTcuMDg2LTQuOTUyYy0uMzQ4IDAtLjYyLjExLS44MTcuMzMtLjE5Ny4yMi0uMzEuNTMzLS4zMzguOTM3aDIuMjk5Yy0uMDA4LS40MDQtLjExMy0uNzE3LS4zMTctLjkzNy0uMjA0LS4yMi0uNDgtLjMzLS44MjctLjMzem0uMjMgNS4wNmMtLjk2NiAwLTEuNzIyLS4yNjctMi4yNjYtLjgtLjU0NC0uNTM0LS44MTYtMS4yOS0uODE2LTIuMjY3IDAtMS4wMDcuMjUxLTEuNzg1Ljc1NC0yLjMzNC41MDMtLjU1IDEuMTk5LS44MjUgMi4wODctLjgyNS44NDggMCAxLjUxLjI0MiAxLjk4Mi43MjUuNDcyLjQ4NC43MDkgMS4xNTIuNzA5IDIuMDA0di43OTVoLTMuODczYy4wMTguNDY1LjE1Ni44MjkuNDE0IDEuMDkuMjU4LjI2MS42Mi4zOTIgMS4wODUuMzkyLjM2MSAwIC43MDMtLjAzNyAxLjAyNi0uMTEzYTUuMTMzIDUuMTMzIDAgMCAwIDEuMDEtLjM2djEuMjY4Yy0uMjg3LjE0My0uNTkzLjI1LS45Mi4zMmE1Ljc5IDUuNzkgMCAwIDEtMS4xOTEuMTA0em03LjI1My02LjIyNmMuMjIyIDAgLjQwNi4wMTYuNTUzLjA0OWwtLjEyNCAxLjUzNmExLjg3NyAxLjg3NyAwIDAgMC0uNDgzLS4wNTRjLS41MjMgMC0uOTMuMTM0LTEuMjIyLjQwMy0uMjkyLjI2OC0uNDM4LjY0NC0uNDM4IDEuMTI4VjI0aC0xLjYzOHYtNi4wMDVoMS4yNGwuMjQyIDEuMDFoLjA4Yy4xODctLjMzNy40MzktLjYwOC43NTYtLjgxNGExLjg2IDEuODYgMCAwIDEgMS4wMzQtLjMwOXptNC4wMjkgMS4xNjZjLS4zNDcgMC0uNjIuMTEtLjgxNy4zMy0uMTk3LjIyLS4zMS41MzMtLjMzOC45MzdoMi4yOTljLS4wMDctLjQwNC0uMTEzLS43MTctLjMxNy0uOTM3LS4yMDQtLjIyLS40OC0uMzMtLjgyNy0uMzN6bS4yMyA1LjA2Yy0uOTY2IDAtMS43MjItLjI2Ny0yLjI2Ni0uOC0uNTQ0LS41MzQtLjgxNi0xLjI5LS44MTYtMi4yNjcgMC0xLjAwNy4yNTEtMS43ODUuNzU0LTIuMzM0LjUwNC0uNTUgMS4yLS44MjUgMi4wODctLjgyNS44NDkgMCAxLjUxLjI0MiAxLjk4Mi43MjUuNDczLjQ4NC43MDkgMS4xNTIuNzA5IDIuMDA0di43OTVoLTMuODczYy4wMTguNDY1LjE1Ni44MjkuNDE0IDEuMDkuMjU4LjI2MS42Mi4zOTIgMS4wODUuMzkyLjM2MiAwIC43MDQtLjAzNyAxLjAyNi0uMTEzYTUuMTMzIDUuMTMzIDAgMCAwIDEuMDEtLjM2djEuMjY4Yy0uMjg3LjE0My0uNTkzLjI1LS45MTkuMzJhNS43OSA1Ljc5IDAgMCAxLTEuMTkyLjEwNHptNS44MDMgMGMtLjcwNiAwLTEuMjYtLjI3NS0xLjY2My0uODIyLS40MDMtLjU0OC0uNjA0LTEuMzA3LS42MDQtMi4yNzggMC0uOTg0LjIwNS0xLjc1Mi42MTUtMi4zMDEuNDEtLjU1Ljk3NS0uODI1IDEuNjk1LS44MjUuNzU1IDAgMS4zMzIuMjk0IDEuNzI5Ljg4MWguMDU0YTYuNjk3IDYuNjk3IDAgMCAxLS4xMjQtMS4xOTh2LTEuOTIyaDEuNjQ0VjI0SDQ2LjQzbC0uMzE3LS43NzloLS4wN2MtLjM3Mi41OTEtLjk0Ljg4Ni0xLjcwMi44ODZ6bS41NzQtMS4zMDZjLjQyIDAgLjcyNi0uMTIxLjkyMS0uMzY1LjE5Ni0uMjQzLjMwMi0uNjU3LjMyLTEuMjR2LS4xNzhjMC0uNjQ0LS4xLTEuMTA2LS4yOTgtMS4zODYtLjE5OS0uMjc5LS41MjItLjQxOS0uOTctLjQxOS4zMzcgMCAuNjA1LS4xNTUuODA0LS40NjUuMTk5LS4zMS4yOTgtLjc2LjI5OC0xLjM1IDAtLjU5MS0uMS0xLjAzNS0uMy0xLjMzYS45NDMuOTQzIDAgMCAwLS44MjMtLjQ0M3ptMy4xODYtMS4xOTdoMS43OTRsMS4xMzQgMy4zNzljLjA5Ni4yOTMuMTYzLjY0LjE5OCAxLjA0MmguMDMzYy4wMzktLjM3LjExNi0uNzE3LjIzLTEuMDQybDEuMTEyLTMuMzc5aDEuNzU3bC0yLjU0IDYuNzczYy0uMjM0LjYyNy0uNTY2IDEuMDk2LS45OTcgMS40MDctLjQzMi4zMTItLjkzNi40NjgtMS41MTIuNDY4LS4yODMgMC0uNTYtLjAzLS44MzMtLjA5MnYtMS4zYTIuOCAyLjggMCAwIDAgLjY0NS4wN2MuMjkgMCAuNTQzLS4wODguNzYtLjI2Ni4yMTctLjE3Ny4zODYtLjQ0NC41MDgtLjgwM2wuMDk2LS4yOTUtMi4zODUtNS45NjJ6Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzMpIj4KICAgICAgICAgICAgPGNpcmNsZSBjeD0iMTkiIGN5PSIxOSIgcj0iMTkiIGZpbGw9IiNFMEUwRTAiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTIyLjQ3NCAxNS40NDNoNS4xNjJMMTIuNDM2IDMwLjRWMTAuMzYzSDE1LjJsLTUuMTYyIDUuMDh6Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGZpbGw9IiNEMkQyRDIiIGQ9Ik0xMjEuNTQ0IDE0LjU2di0xLjcyOGg4LjI3MnYxLjcyOGgtMy4wMjRWMjRoLTIuMjR2LTkuNDRoLTMuMDA4em0xMy43NDQgOS41NjhjLTEuMjkgMC0yLjM0MS0uNDE5LTMuMTUyLTEuMjU2LS44MS0uODM3LTEuMjE2LTEuOTQ0LTEuMjE2LTMuMzJzLjQwOC0yLjQ3NyAxLjIyNC0zLjMwNGMuODE2LS44MjcgMS44NzItMS4yNCAzLjE2OC0xLjI0czIuMzYuNDAzIDMuMTkyIDEuMjA4Yy44MzIuODA1IDEuMjQ4IDEuODggMS4yNDggMy4yMjQgMCAuMzEtLjAyMS41OTctLjA2NC44NjRoLTYuNDY0Yy4wNTMuNTc2LjI2NyAxLjA0LjY0IDEuMzkyLjM3My4zNTIuODQ4LjUyOCAxLjQyNC41MjguNzc5IDAgMS4zNTUtLjMyIDEuNzI4LS45NmgyLjQzMmEzLjg5MSAzLjg5MSAwIDAgMS0xLjQ4OCAyLjA2NGMtLjczNi41MzMtMS42MjcuOC0yLjY3Mi44em0xLjQ4LTYuNjg4Yy0uNC0uMzUyLS44ODMtLjUyOC0xLjQ0OC0uNTI4cy0xLjAzNy4xNzYtMS40MTYuNTI4Yy0uMzc5LjM1Mi0uNjA1LjgyMS0uNjggMS40MDhoNC4xOTJjLS4wMzItLjU4Ny0uMjQ4LTEuMDU2LS42NDgtMS40MDh6bTcuMDE2LTIuMzA0djEuNTY4Yy41OTctMS4xMyAxLjQ2MS0xLjY5NiAyLjU5Mi0xLjY5NnYyLjMwNGgtLjU2Yy0uNjcyIDAtMS4xNzkuMTY4LTEuNTIuNTA0LS4zNDEuMzM2LS41MTIuOTE1LS41MTIgMS43MzZWMjRoLTIuMjU2di04Ljg2NGgyLjI1NnptNi40NDggMHYxLjMyOGMuNTY1LS45NyAxLjQ4My0xLjQ1NiAyLjc1Mi0xLjQ1Ni42NzIgMCAxLjI3Mi4xNTUgMS44LjQ2NC41MjguMzEuOTM2Ljc1MiAxLjIyNCAxLjMyOC4zMS0uNTU1LjczMy0uOTkyIDEuMjcyLTEuMzEyYTMuNDg4IDMuNDg4IDAgMCAxIDEuODE2LS40OGMxLjA1NiAwIDEuOTA3LjMzIDIuNTUyLjk5Mi42NDUuNjYxLjk2OCAxLjU5Ljk2OCAyLjc4NFYyNGgtMi4yNHYtNC44OTZjMC0uNjkzLS4xNzYtMS4yMjQtLjUyOC0xLjU5Mi0uMzUyLS4zNjgtLjgzMi0uNTUyLTEuNDQtLjU1MnMtMS4wOS4xODQtMS40NDguNTUyYy0uMzU3LjM2OC0uNTM2Ljg5OS0uNTM2IDEuNTkyVjI0aC0yLjI0di00Ljg5NmMwLS42OTMtLjE3Ni0xLjIyNC0uNTI4LTEuNTkyLS4zNTItLjM2OC0uODMyLS41NTItMS40NC0uNTUycy0xLjA5LjE4NC0xLjQ0OC41NTJjLS4zNTcuMzY4LS41MzYuODk5LS41MzYgMS41OTJWMjRoLTIuMjU2di04Ljg2NGgyLjI1NnpNMTY0LjkzNiAyNFYxMi4xNmgyLjI1NlYyNGgtMi4yNTZ6bTcuMDQtLjE2bC0zLjQ3Mi04LjcwNGgyLjUyOGwyLjI1NiA2LjMwNCAyLjM4NC02LjMwNGgyLjM1MmwtNS41MzYgMTMuMDU2aC0yLjM1MmwxLjg0LTQuMzUyeiIvPgogICAgPC9nPgogPC9zdmc+Cg==") center no-repeat`,
        }}
      ></div>

      {/* Privacy Policy Content */}
      <div className="body">
        <div>
          <h1 className="text-2xl font-bold text-black">PRIVACY POLICY</h1>
        </div>
        <div>
          <span className="text-sm text-gray-500">
            Last updated September 17, 2025
          </span>
        </div>
        <div className="my-6"></div>
        <div className="leading-relaxed text-sm text-gray-600">
          This Privacy Notice for <span className="noTranslate">Madena Brand</span> (
          <strong>we</strong>, <strong>us</strong>, or <strong>our</strong>), describes
          how and why we might access, collect, store, use, and/or share (
          <strong>process</strong>) your personal information when you use our services (
          <strong>Services</strong>), including when you:
        </div>
        <ul className="list-[square] ml-4">
          <li className="text-sm text-gray-600">
            Visit our website at{' '}
            <a
              href="https://madenabrand.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 noTranslate"
            >
              https://madenabrand.vercel.app
            </a>{' '}
            or any website of ours that links to this Privacy Notice
          </li>
          <li className="text-sm text-gray-600">
            Engage with us in other related ways, including any sales, marketing, or events
          </li>
        </ul>
        <div className="leading-relaxed text-sm text-gray-600">
          <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you
          understand your privacy rights and choices. We are responsible for making decisions
          about how your personal information is processed. If you do not agree with our
          policies and practices, please do not use our Services. If you still have any
          questions or concerns, please contact us at{' '}
          <a
            href="mailto:islammuradov1@icloud.com"
            target="_blank"
            className="text-blue-600 noTranslate"
          >
            islammuradov1@icloud.com
          </a>.
        </div>
        <div className="my-6"></div>
        <h2 className="text-lg font-bold text-black">SUMMARY OF KEY POINTS</h2>
        <div className="leading-relaxed text-sm text-gray-600">
          <strong>
            <em>
              This summary provides key points from our Privacy Notice, but you can find out
              more details about any of these topics by clicking the link following each key
              point or by using our{' '}
            </em>
          </strong>
          <a href="#toc" className="text-blue-600">
            <strong>
              <em>table of contents</em>
            </strong>
          </a>
          <strong>
            <em> below to find the section you are looking for.</em>
          </strong>
        </div>
        <div className="my-4"></div>
        <div className="leading-relaxed text-sm text-gray-600">
          <strong>What personal information do we process?</strong> When you visit, use, or
          navigate our Services, we may process personal information depending on how you
          interact with us and the Services, the choices you make, and the products and
          features you use. Learn more about{' '}
          <a href="#personalinfo" className="text-blue-600">
            personal information you disclose to us
          </a>.
        </div>
        <div className="my-4"></div>
        <div className="leading-relaxed text-sm text-gray-600">
          <strong>Do we process any sensitive personal information?</strong> Some of the
          information may be considered <span>special</span> or <span>sensitive</span> in
          certain jurisdictions, for example your racial or ethnic origins, sexual
          orientation, and religious beliefs. We do not process sensitive personal
          information.
        </div>
        <div className="my-4"></div>
        <div className="leading-relaxed text-sm text-gray-600">
          <strong>Do we collect any information from third parties?</strong> We do not
          collect any information from third parties.
        </div>
        <div className="my-4"></div>
        <div className="leading-relaxed text-sm text-gray-600">
          <strong>How do we process your information?</strong> We process your information
          to provide, improve, and administer our Services, communicate with you, for
          security and fraud prevention, and to comply with law. We may also process your
          information for other purposes with your consent. We process your information only
          when we have a valid legal reason to do so. Learn more about{' '}
          <a href="#infouse" className="text-blue-600">
            how we process your information
          </a>.
        </div>
        <div className="my-4"></div>
        <div className="leading-relaxed text-sm text-gray-600">
          <strong>In what situations and with which parties do we share personal
          information?</strong> We may share information in specific situations and with
          specific third parties. Learn more about{' '}
          <a href="#whoshare" className="text-blue-600">
            when and with whom we share your personal information
          </a>.
        </div>
        <div className="my-4"></div>
        <div className="leading-relaxed text-sm text-gray-600">
          <strong>How do we keep your information safe?</strong> We have adequate
          organizational and technical processes and procedures in place to protect your
          personal information. However, no electronic transmission over the internet or
          information storage technology can be guaranteed to be 100% secure, so we cannot
          promise or guarantee that hackers, cybercriminals, or other unauthorized third
          parties will not be able to defeat our security and improperly collect, access,
          steal, or modify your information. Learn more about{' '}
          <a href="#infosafe" className="text-blue-600">
            how we keep your information safe
          </a>.
        </div>
        <div className="my-4"></div>
        <div className="leading-relaxed text-sm text-gray-600">
          <strong>What are your rights?</strong> Depending on where you are located
          geographically, the applicable privacy law may mean you have certain rights
          regarding your personal information. Learn more about{' '}
          <a href="#privacyrights" className="text-blue-600">
            your privacy rights
          </a>.
        </div>
        <div className="my-4"></div>
        <div className="leading-relaxed text-sm text-gray-600">
          <strong>How do you exercise your rights?</strong> The easiest way to exercise your
          rights is by submitting a{' '}
          <a
            href="https://app.termly.io/notify/87b7cf34-e78b-4d60-89d6-812b82c003c6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            data subject access request
          </a>, or by contacting us. We will consider and act upon any request in accordance
          with applicable data protection laws.
        </div>
        <div className="my-4"></div>
        <div className="leading-relaxed text-sm text-gray-600">
          Want to learn more about what we do with any information we collect?{' '}
          <a href="#toc" className="text-blue-600">
            Review the Privacy Notice in full
          </a>.
        </div>
        <div className="my-6"></div>
        <div id="toc">
          <h2 className="text-lg font-bold text-black">TABLE OF CONTENTS</h2>
        </div>
        <div className="leading-relaxed text-sm">
          <a href="#infocollect" className="text-blue-600">
            1. WHAT INFORMATION DO WE COLLECT?
          </a>
        </div>
        <div className="leading-relaxed text-sm">
          <a href="#infouse" className="text-blue-600">
            2. HOW DO WE PROCESS YOUR INFORMATION?
          </a>
        </div>
        <div className="leading-relaxed text-sm">
          <a href="#whoshare" className="text-blue-600">
            3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </a>
        </div>
        <div className="leading-relaxed text-sm">
          <a href="#inforetain" className="text-blue-600">
            4. HOW LONG DO WE KEEP YOUR INFORMATION?
          </a>
        </div>
        <div className="leading-relaxed text-sm">
          <a href="#infosafe" className="text-blue-600">
            5. HOW DO WE KEEP YOUR INFORMATION SAFE?
          </a>
        </div>
        <div className="leading-relaxed text-sm">
          <a href="#infominors" className="text-blue-600">
            6. DO WE COLLECT INFORMATION FROM MINORS?
          </a>
        </div>
        <div className="leading-relaxed text-sm">
          <a href="#privacyrights" className="text-blue-600">
            7. WHAT ARE YOUR PRIVACY RIGHTS?
          </a>
        </div>
        <div className="leading-relaxed text-sm">
          <a href="#DNT" className="text-blue-600">
            8. CONTROLS FOR DO-NOT-TRACK FEATURES
          </a>
        </div>
        <div className="leading-relaxed text-sm">
          <a href="#policyupdates" className="text-blue-600">
            9. DO WE MAKE UPDATES TO THIS NOTICE?
          </a>
        </div>
        <div className="leading-relaxed text-sm">
          <a href="#contact" className="text-blue-600">
            10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </a>
        </div>
        <div className="leading-relaxed text-sm">
          <a href="#request" className="text-blue-600">
            11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
          </a>
        </div>
        <div className="my-6"></div>
        <div id="infocollect">
          <h2 className="text-lg font-bold text-black">1. WHAT INFORMATION DO WE COLLECT?</h2>
          <h3 className="text-base font-bold text-black" id="personalinfo">
            Personal information you disclose to us
          </h3>
          <div className="leading-relaxed text-sm text-gray-600">
            <strong>
              <em>In Short:</em>
            </strong>{' '}
            <em>We collect personal information that you provide to us.</em>
          </div>
          <div className="my-4"></div>
          <div className="leading-relaxed text-sm text-gray-600">
            We collect personal information that you voluntarily provide to us when you express
            an interest in obtaining information about us or our products and Services, when
            you participate in activities on the Services, or otherwise when you contact us.
          </div>
          <div className="my-4"></div>
          <div id="sensitiveinfo" className="leading-relaxed text-sm text-gray-600">
            <strong>Sensitive Information.</strong> We do not process sensitive information.
          </div>
          <div className="my-4"></div>
          <div className="leading-relaxed text-sm text-gray-600">
            All personal information that you provide to us must be true, complete, and
            accurate, and you must notify us of any changes to such personal information.
          </div>
          <div className="my-4"></div>
          <div className="leading-relaxed text-sm text-gray-600">
            <strong>Google API</strong> Our use of information received from Google APIs will
            adhere to{' '}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              Google API Services User Data Policy
            </a>, including the{' '}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy#limited-use"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              Limited Use requirements
            </a>.
          </div>
        </div>
        <div className="my-6"></div>
        <div id="infouse">
          <h2 className="text-lg font-bold text-black">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
          <div className="leading-relaxed text-sm text-gray-600">
            <strong>
              <em>In Short:</em>
            </strong>{' '}
            <em>
              We process your information to provide, improve, and administer our Services,
              communicate with you, for security and fraud prevention, and to comply with law.
              We may also process your information for other purposes with your consent.
            </em>
          </div>
          <div className="my-4"></div>
          <div className="leading-relaxed text-sm text-gray-600">
            <strong>
              We process your personal information for a variety of reasons, depending on how
              you interact with our Services, including:
            </strong>
          </div>
        </div>
        <div className="my-6"></div>
        <div id="whoshare">
          <h2 className="text-lg font-bold text-black">
            3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </h2>
          <div className="leading-relaxed text-sm text-gray-600">
            <strong>
              <em>In Short:</em>
            </strong>{' '}
            <em>
              We may share information in specific situations described in this section and/or
              with the following third parties.
            </em>
          </div>
          <div className="my-4"></div>
          <div className="leading-relaxed text-sm text-gray-600">
            We may need to share your personal information in the following situations:
          </div>
          <ul className="list-[square] ml-4">
            <li className="text-sm text-gray-600">
              <strong>Business Transfers.</strong> We may share or transfer your information in
              connection with, or during negotiations of, any merger, sale of company assets,
              financing, or acquisition of all or a portion of our business to another company.
            </li>
          </ul>
        </div>
        <div className="my-6"></div>
        <div id="inforetain">
          <h2 className="text-lg font-bold text-black">4. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
          <div className="leading-relaxed text-sm text-gray-600">
            <strong>
              <em>In Short:</em>
            </strong>{' '}
            <em>
              We keep your information for as long as necessary to fulfill the purposes outlined
              in this Privacy Notice unless otherwise required by law.
            </em>
          </div>
          <div className="my-4"></div>
          <div className="leading-relaxed text-sm text-gray-600">
            We will only keep your personal information for as long as it is necessary for the
            purposes set out in this Privacy Notice, unless a longer retention period is
            required or permitted by law (such as tax, accounting, or other legal
            requirements).
          </div>
          <div className="my-4"></div>
          <div className="leading-relaxed text-sm text-gray-600">
            When we have no ongoing legitimate business need to process your personal
            information, we will either delete or anonymize such information, or, if this is
            not possible (for example, because your personal information has been stored in
            backup archives), then we will securely store your personal information and isolate
            it from any further processing until deletion is possible.
          </div>
        </div>
        <div className="my-6"></div>
        <div id="infosafe">
          <h2 className="text-lg font-bold text-black">5. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
          <div className="leading-relaxed text-sm text-gray-600">
            <strong>
              <em>In Short:</em>
            </strong>{' '}
            <em>
              We aim to protect your personal information through a system of organizational and
              technical security measures.
            </em>
          </div>
          <div className="my-4"></div>
          <div className="leading-relaxed text-sm text-gray-600">
            We have implemented appropriate and reasonable technical and organizational
            security measures designed to protect the security of any personal information we
            process. However, despite our safeguards and efforts to secure your information, no
            electronic transmission over the Internet or information storage technology can be
            guaranteed to be 100% secure, so we cannot promise or guarantee that hackers,
            cybercriminals, or other unauthorized third parties will not be able to defeat our
            security and improperly collect, access, steal, or modify your information.
            Although we will do our best to protect your personal information, transmission of
            personal information to and from our Services is at your own risk. You should only
            access the Services within a secure environment.
          </div>
        </div>
        <div className="my-6"></div>
        <div id="infominors">
          <h2 className="text-lg font-bold text-black">6. DO WE COLLECT INFORMATION FROM MINORS?</h2>
          <div className="leading-relaxed text-sm text-gray-600">
            <strong>
              <em>In Short:</em>
            </strong>{' '}
            <em>
              We do not knowingly collect data from or market to children under 18 years of age.
            </em>
          </div>
          <div className="my-4"></div>
          <div className="leading-relaxed text-sm text-gray-600">
            We do not knowingly collect, solicit data from, or market to children under 18 years
            of age, nor do we knowingly sell such personal information. By using the Services,
            you represent that you are at least 18 or that you are the parent or guardian of
            such a minor and consent to such minor dependent’s use of the Services. If we learn
            that personal information from users less than 18 years of age has been collected,
            we will deactivate the account and take reasonable measures to promptly delete such
            data from our records. If you become aware of any data we may have collected from
            children under age 18, please contact us at{' '}
            <a
              href="mailto:islammuradov1@icloud.com"
              target="_blank"
              className="text-blue-600 noTranslate"
            >
              islammuradov1@icloud.com
            </a>.
          </div>
        </div>
        <div className="my-6"></div>
        <div id="privacyrights">
          <h2 className="text-lg font-bold text-black">7. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
          <div className="leading-relaxed text-sm text-gray-600">
            <strong>
              <em>In Short:</em>
            </strong>{' '}
            <em>
              You may review, change, or terminate your account at any time, depending on your
              country, province, or state of residence.
            </em>
          </div>
          <div className="my-4"></div>
          <div id="withdrawconsent" className="leading-relaxed text-sm text-gray-600">
            <strong>
              <u>Withdrawing your consent:</u>
            </strong>{' '}
            If we are relying on your consent to process your personal information, which may be
            express and/or implied consent depending on the applicable law, you have the right
            to withdraw your consent at any time. You can withdraw your consent at any time by
            contacting us by using the contact details provided in the section{' '}
            <a href="#contact" className="text-blue-600">
              HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </a>{' '}
            below.
          </div>
          <div className="my-4"></div>
          <div className="leading-relaxed text-sm text-gray-600">
            However, please note that this will not affect the lawfulness of the processing
            before its withdrawal nor, when applicable law allows, will it affect the
            processing of your personal information conducted in reliance on lawful processing
            grounds other than consent.
          </div>
          <div className="my-4"></div>
          <div className="leading-relaxed text-sm text-gray-600">
            If you have questions or comments about your privacy rights, you may email us at{' '}
            <a
              href="mailto:islammuradov1@icloud.com"
              target="_blank"
              className="text-blue-600 noTranslate"
            >
              islammuradov1@icloud.com
            </a>.
          </div>
        </div>
        <div className="my-6"></div>
        <div id="DNT">
          <h2 className="text-lg font-bold text-black">8. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
          <div className="leading-relaxed text-sm text-gray-600">
            Most web browsers and some mobile operating systems and mobile applications include
            a Do-Not-Track (<span>DNT</span>) feature or setting you can activate to signal your
            privacy preference not to have data about your online browsing activities monitored
            and collected. At this stage, no uniform technology standard for recognizing and
            implementing DNT signals has been finalized. As such, we do not currently respond to
            DNT browser signals or any other mechanism that automatically communicates your
            choice not to be tracked online. If a standard for online tracking is adopted that
            we must follow in the future, we will inform you about that practice in a revised
            version of this Privacy Notice.
          </div>
        </div>
        <div className="my-6"></div>
        <div id="policyupdates">
          <h2 className="text-lg font-bold text-black">9. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
          <div className="leading-relaxed text-sm text-gray-600">
            <strong>
              <em>In Short:</em>
            </strong>{' '}
            <em>Yes, we will update this notice as necessary to stay compliant with relevant laws.</em>
          </div>
          <div className="my-4"></div>
          <div className="leading-relaxed text-sm text-gray-600">
            We may update this Privacy Notice from time to time. The updated version will be
            indicated by an updated <span>Revised</span> date at the top of this Privacy Notice.
            If we make material changes to this Privacy Notice, we may notify you either by
            prominently posting a notice of such changes or by directly sending you a
            notification. We encourage you to review this Privacy Notice frequently to be
            informed of how we are protecting your information.
          </div>
        </div>
        <div className="my-6"></div>
        <div id="contact">
          <h2 className="text-lg font-bold text-black">10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
          <div className="leading-relaxed text-sm text-gray-600">
            If you have questions or comments about this notice, you may email us at{' '}
            <a
              href="mailto:islammuradov1@icloud.com"
              target="_blank"
              className="text-blue-600 noTranslate"
            >
              islammuradov1@icloud.com
            </a>{' '}
            or contact us by post at:
          </div>
          <div className="my-4"></div>
          <div className="leading-relaxed text-sm text-gray-600">
            <span className="noTranslate">Madena Brand</span>
            <br />
            <span className="noTranslate">Baku</span>
            <br />
            <span className="noTranslate">Baku, Baku 1000</span>
            <br />
            <span className="noTranslate">Azerbaijan</span>
          </div>
        </div>
        <div className="my-6"></div>
        <div id="request">
          <h2 className="text-lg font-bold text-black">
            11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
          </h2>
          <div className="leading-relaxed text-sm text-gray-600">
            Based on the applicable laws of your country, you may have the right to request
            access to the personal information we collect from you, details about how we have
            processed it, correct inaccuracies, or delete your personal information. You may
            also have the right to withdraw your consent to our processing of your personal
            information. These rights may be limited in some circumstances by applicable law.
            To request to review, update, or delete your personal information, please fill out
            and submit a{' '}
            <a
              href="https://app.termly.io/notify/87b7cf34-e78b-4d60-89d6-812b82c003c6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              data subject access request
            </a>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;