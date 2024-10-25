const authentication = {
  name: "Authentication & JWT",
  introduction:
    "การยืนยันตัวตน (Authentication) เป็นกระบวนการตรวจสอบว่าใครเป็นผู้ใช้งานระบบ โดยในระบบสมัยใหม่มักใช้วิธีที่เรียกว่า JWT (JSON Web Token) เพื่อจัดการการยืนยันตัวตนของผู้ใช้ในระบบที่มีการเชื่อมต่อระหว่างเซิร์ฟเวอร์และไคลเอนต์ เช่น เว็บแอปพลิเคชัน และแอปพลิเคชันมือถือ",
  content: {
    auth: "Authentication คืออะไร Authentication เป็นขั้นตอนสำคัญที่ระบบต้องรู้จักและยืนยันตัวตนของผู้ใช้ก่อนที่จะอนุญาตให้เข้าถึงทรัพยากรที่จำเป็น เมื่อผู้ใช้ทำการเข้าสู่ระบบ ระบบจะต้องตรวจสอบข้อมูล เช่น อีเมลและรหัสผ่าน ว่าถูกต้องหรือไม่",
    jwt: "JWT (JSON Web Token) คืออะไร JWT เป็นมาตรฐานเปิดที่ช่วยในการแลกเปลี่ยนข้อมูลที่ได้รับการยืนยันได้อย่างปลอดภัย ระหว่างสองฝ่าย (เช่น ไคลเอนต์และเซิร์ฟเวอร์) โดยใน JWT ข้อมูลจะถูกเก็บไว้ในรูปแบบของ JSON และเข้ารหัสอย่างปลอดภัย JWT ประกอบด้วย 3 ส่วนหลัก คือ Header, Payload และ Signature",
    diagram:
      "จาก diagram การทำงานของระบบ Authentication ด้วย JWT ซึ่งแสดงให้เห็นการทำงานระหว่าง Frontend, Backend, และ Database ขั้นตอนนี้อธิบายการทำงานแบบคร่าว ๆ ของการยืนยันตัวตนผู้ใช้ในระบบที่ใช้ JWT สำหรับการจัดการ session และการยืนยันสิทธิ์",
  },
  code: {
    introduction:
      "ตัวอย่างการใช้งาน Fiber ร่วมกับ JWT เพื่อจัดการการยืนยันตัวตน (Authentication) ในระบบ โดยมีฟังก์ชันหลัก ๆ ดังนี้",
    struct_code: `type User struct {
          Email    string \`json:"email"\`
          Password string \`json:"password"\`
     }`,
    struct_description:
      "เป็น Struct สำหรับเก็บข้อมูลผู้ใช้ โดยประกอบไปด้วย Email และ Password ที่รับค่าจาก JSON ในการล็อกอิน",
    generateJWT_code: `func generateJWT(email string) (string, error)`,
    generateJWT_description:
      "ทำหน้าที่สร้าง JWT Token โดยใช้อีเมลผู้ใช้เป็นข้อมูลใน claims กำหนดให้ Token หมดอายุภายใน 24 ชั่วโมง (exp) และใช้การเข้ารหัสแบบ HS256 และเซ็นด้วย jwtSecret",
    handler_code: `func login(c *fiber.Ctx) error`,
    handler_description:
      "ทำหน้าที่จัดการการเข้าสู่ระบบ (Login) เช่น รับข้อมูลผู้ใช้ (อีเมลและรหัสผ่าน) จาก Body ของคำขอ (request) ตรวจสอบข้อมูล (ในตัวอย่างนี้เป็นการ hardcode ข้อมูลอีเมลและรหัสผ่าน) ถ้าข้อมูลถูกต้อง จะทำการสร้าง JWT Token และส่งกลับในรูปแบบ cookie ถ้าข้อมูลไม่ถูกต้อง จะส่งสถานะ 401 (Unauthorized)",

    middleware_code: `func protected(c *fiber.Ctx) error`,
    middleware_description:
      'ทำหน้าที่ตรวจสอบ JWT Token ที่ถูกส่งมาในรูปแบบ cookie ดึง Token จาก cookie ที่มีชื่อ jwt แล้วทำการ Parse JWT และตรวจสอบความถูกต้อง (Validate Token) หาก Token ถูกต้อง จะส่งคำตอบว่า "You are logged in" หาก Token ไม่ถูกต้องหรือหมดอายุ จะส่งสถานะ 401 (Unauthorized) พร้อมข้อความแจ้งว่าไม่ได้รับอนุญาต',

    main_go: `package main

     import (
          "time"
          "github.com/gofiber/fiber/v2"
          "github.com/gofiber/fiber/v2/middleware/cors"
          "github.com/gofiber/fiber/v2/middleware/logger"
          "github.com/golang-jwt/jwt/v4"
      )

     var jwtSecret = []byte("mysecretkey")

      // Struct สำหรับเก็บข้อมูลผู้ใช้
      type User struct {
          Email    string \`json:"email"\`
          Password string \`json:"password"\`
      }

      // ฟังก์ชันสำหรับสร้าง JWT Token
      func generateJWT(email string) (string, error) {
          token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
              "email": email,
              "exp":   time.Now().Add(time.Hour * 24).Unix(), // token หมดอายุใน 24 ชั่วโมง
          })
          return token.SignedString(jwtSecret)
      }

      // Handler สำหรับการล็อกอิน
      func login(c *fiber.Ctx) error {
          var user User

          if err := c.BodyParser(&user); err != nil {
              return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
                  "message": "Invalid request",
              })
          }

          // ตรวจสอบอีเมลและรหัสผ่าน (ในที่นี้จะเป็น hardcode เพียงเพื่อเป็นตัวอย่าง)
          if user.Email != "test@example.com" || user.Password != "password123" {
              return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
                  "message": "Invalid credentials",
              })
          }

          // สร้าง JWT token
          token, err := generateJWT(user.Email)
          if err != nil {
              return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
                  "message": "Could not login",
              })
          }

          // ส่ง token กลับไปในรูปแบบ cookie
          c.Cookie(&fiber.Cookie{
              Name:     "jwt",
              Value:    token,
              Expires:  time.Now().Add(24 * time.Hour),
              HTTPOnly: true,
          })

          return c.JSON(fiber.Map{
              "message": "Login successful",
          })
      }

      // Middleware สำหรับตรวจสอบ JWT token
      func protected(c *fiber.Ctx) error {
          cookie := c.Cookies("jwt")

          // ตรวจสอบว่า cookie มี JWT token หรือไม่
          token, err := jwt.Parse(cookie, func(t *jwt.Token) (interface{}, error) {
              return jwtSecret, nil
          })

          if err != nil || !token.Valid {
              return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
                  "message": "Unauthorized",
              })
          }

          // ส่งข้อมูลกลับเมื่อ JWT ถูกต้อง
          return c.JSON(fiber.Map{
              "message": "You are logged in",
          })
      }

      func main() {
          app := fiber.New()

          // Middleware
          app.Use(logger.New())
          app.Use(cors.New())

          // Routes
          app.Post("/login", login)
          app.Get("/protected", protected)

          app.Listen(":3000")
     }`,
  },
  summarize:
    "JWT เป็นเทคโนโลยีที่ช่วยให้การยืนยันตัวตนของผู้ใช้ในระบบเป็นเรื่องง่ายขึ้นและปลอดภัยขึ้น ด้วยความสามารถในการจัดเก็บและเข้ารหัสข้อมูลอย่างมีประสิทธิภาพ ทำให้สามารถนำไปใช้ในระบบที่มีการเชื่อมต่อระหว่างไคลเอนต์และเซิร์ฟเวอร์ได้เป็นอย่างดี",
};

const embeddedsystem = {
    name: "Embedded System",
}
export { authentication, embeddedsystem };
