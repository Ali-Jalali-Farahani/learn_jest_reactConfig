
import Link from "next/link";
import React, {PropsWithChildren} from "react";


const RootLayout:React.FC<PropsWithChildren>=({ children })=> {

  return (
      <html lang="en">
        <body>
          <div className="navbar">
              <Link href={"/"}>Home</Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/posts"}>Posts</Link>
          </div>
          {children}
        </body>
      </html>
  )

}

export default  RootLayout
