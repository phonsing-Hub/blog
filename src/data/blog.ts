const authentication = {
  name: "Authentication",
  tittle:
    "การ Authentication (ออเทนทิเคชั่น) หรือการยืนยันตัวตน คือ กระบวนการตรวจสอบและยืนยันว่า ผู้ใช้หรือระบบที่กำลังพยายามเข้าถึงข้อมูลหรือบริการต่าง ๆ เป็นใคร โดยใช้ข้อมูลที่ใช้ยืนยัน เช่น ชื่อผู้ใช้และรหัสผ่าน, การส่งรหัส OTP ทางข้อความ, หรือการสแกนลายนิ้วมือ การทำเช่นนี้มีจุดประสงค์เพื่อให้แน่ใจว่าผู้ใช้มีสิทธิ์ในการเข้าถึงข้อมูลหรือบริการนั้น ๆ โดยป้องกันไม่ให้บุคคลที่ไม่มีสิทธิ์เข้ามาใช้งาน",
  content_1: {
    title:
      "การนำ Authentication มาใช้ในระบบสามารถพบได้ในหลากหลายบริบท ตัวอย่างเช่น",
    num1: {
      title: "ระบบล็อกอินเว็บไซต์",
      content:
        "เมื่อผู้ใช้พยายามเข้าสู่ระบบของเว็บไซต์ เช่น Facebook หรือ Gmail ผู้ใช้ต้องใส่ชื่อผู้ใช้และรหัสผ่านเพื่อยืนยันตัวตน",
    },
    num2: {
      title: "แอปพลิเคชันธนาคาร",
      content:
        "ผู้ใช้ต้องใส่รหัสผ่านหรือใช้การสแกนใบหน้า/ลายนิ้วมือเพื่อยืนยันตัวตนในการเข้าถึงบัญชีธนาคารของตน",
    },
    num3: {
      title: "การเข้าถึงเครือข่ายองค์กร",
      content:
        "พนักงานที่ต้องการเข้าถึงข้อมูลในเครือข่ายภายในขององค์กรต้องยืนยันตัวตนผ่านการกรอกชื่อผู้ใช้และรหัสผ่านหรือใช้การยืนยันตัวตนแบบสองขั้นตอน (Two-Factor Authentication)",
    },
    num4: {
      title: "การยืนยันตัวตนผ่าน OTP",
      content:
        "ในกรณีที่มีการทำธุรกรรมออนไลน์ ผู้ใช้จะได้รับรหัส OTP ทาง SMS หรืออีเมล และต้องกรอกรหัสนี้เพื่อยืนยันตัวตน",
    },
    num5: {
      title: "การใช้บัตรพนักงาน",
      content:
        "การใช้บัตรพนักงานหรือบัตรประจำตัวประชาชนเพื่อนำไปสแกนผ่านเครื่องอ่านบัตรเพื่อเข้าอาคารหรือพื้นที่ที่ต้องการความปลอดภัยสูง",
    },
  },
  content_2: {
    title: "ยกตัวอย่างการทำระบบล็อกอินเว็บไซต์",
    num1: {
      content:
        "การทำระบบล็อกอินเว็บไซต์นั้นมีหลากหลายวิธีมาก ในที่นี้เราจะลองทำ Login ด้วย Authentication JSON Web Token เก็บผ่าน Cookie แล้วให้ server อ่าน cookie (ที่แนบมาคู่กับ HTTP request) เพื่อทำการเช็คว่า token ถูกต้องหรือไม่",
      url: "../Flowchart.jpg",
    },
  },
  content_3: {
    title: "JSON Web Token คืออะไร ?",
    num1: {
      content:
        "คือมาตรฐานเปิดที่ใช้ในการแลกเปลี่ยนข้อมูลที่ถูกเข้ารหัสระหว่างฝ่ายต่างๆ (เช่น ระหว่างเซิร์ฟเวอร์กับไคลเอนต์) ในรูปแบบของ JSON โดยข้อมูลภายใน JWT จะถูกเซ็นด้วยวิธีการเข้ารหัสเพื่อยืนยันความถูกต้องและความสมบูรณ์ของข้อมูล",
      url: "https://jwt.io",
    },
    num2: {
      title: "JWT ประกอบด้วยสามส่วนหลัก ๆ ดังนี้",
    },
    num3: {
      title: "Header",
      content:
        "ประกอบด้วยข้อมูลประเภทของโทเค็น (มักจะเป็น JWT) และอัลกอริทึมที่ใช้เซ็น เช่น HS256 หรือ RS256",
    },
    num4: {
      title: "Payload",
      content:
        "ข้อมูลที่ต้องการส่ง เช่น ข้อมูลผู้ใช้ สิทธิ์การเข้าถึง หรือข้อมูลอื่น ๆ โดยข้อมูลในส่วนนี้ไม่ถูกเข้ารหัสลับ (encryption) แต่จะถูกเข้ารหัสเซ็นชื่อ (signing) เพื่อให้แน่ใจว่าไม่ถูกเปลี่ยนแปลง",
    },
    num5: {
      title: "Signature",
      content:
        "เป็นการเข้ารหัสข้อมูลของส่วนหัวและส่วนข้อมูลโดยใช้อัลกอริทึมและกุญแจลับที่กำหนดขึ้น เพื่อรับรองว่าข้อมูลไม่ถูกดัดแปลง",
    },
    num6: {
      title:
        "อย่างไรก็ตาม การเข้ารหัสด้วย JWT สามารถ decode กลับมาได้ ดังนั้น ไม่ควรเก็บข้อมูลที่ sensitive เช่น password ข้อมูลบัตรเครดิต ข้อมูลส่วนตัวที่ละเอียดอ่อน (เลขประจำตัวประชาชน) เพราะ Payload ของ JWT ไม่ได้ถูกเข้ารหัสแบบปกปิด (encryption) แต่เพียงแค่ถูกเข้ารหัสเซ็นชื่อ (signing) ซึ่งหมายความว่าใครก็ตามที่มีโทเค็น JWT สามารถทำการ decode ข้อมูลใน Payload กลับมาได้ง่าย ๆ โดยใช้เครื่องมือที่หาได้ทั่วไป เช่น jwt.io",
    },
    num7: {
      title:
        "*ถ้าเเบบนี้เราก็สามารถสร้าง jwt token ผ่านเครื่องมือทั่วไปอย่าง jwt.io เพื่อปลอมเป็นคนอื่นได้ใช่ไหม ?",
      content:
        "ต้องบอกว่า jwt จะมีส่วนที่เป็น Signature ส่วนนี้จะเก็บกุญเเจในการสร้าง token ขึ้นมา ถ้ากุญเเจไม่ตรงกันก็จะไม่ทำการ decode (false) Signature นี้จะถูกเก็บอยู่กับฝั่ง server ซึ่งต้องรักษาไว้ให้ดี",
    },
    num8: {
      title:
        "เรามาลองสร้างระบบ Employee System ด้วยภาษา Go กันนะครับ โดยเราจะมีการทำ Authentication การทำ Middleware ให้ทำการ Login ก่อนที่จะเข้ามาที่ API เส้นนี้ได้",
    },
  },
};

const code = {
  go:`package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/joho/godotenv"
	"github.com/phonsing-Hub/EmployeeSystem/src/db"
	"github.com/phonsing-Hub/EmployeeSystem/src/middleware"
	"github.com/phonsing-Hub/EmployeeSystem/src/routing/auth"
	"github.com/phonsing-Hub/EmployeeSystem/src/routing/emp"
	"os"
	"time"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		panic("Error loading .env file")
	}
	api := os.Getenv("API_VERSION")
	dbuser := os.Getenv("DB_USER")
	dbpass := os.Getenv("DB_PASS")
	dbhost := os.Getenv("DB_HOST")
	dbname := os.Getenv("DB_NAME")

	db, err := db.New(dbuser, dbpass, dbhost, dbname)
	if err != nil {
		panic("failed to connect to database")
	}
	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowOrigins:     "http://localhost:5173",                       
		AllowMethods:     "GET, POST, PUT, DELETE, OPTIONS",             
		AllowHeaders:     "Origin, Content-Type, Accept, Authorization", 
		AllowCredentials: true,                                          
		MaxAge:           int(24 * time.Hour / time.Second),             
	}))

	app.Use(logger.New())
	//localhost/v1/auth
	auth_v1 := app.Group(api + "/auth")
	auth.SetAuthentication(auth_v1, db.DB)
	emp_v1 := app.Group(api+"/employees", middleware.Token)
	emp.EmployeesRouting(emp_v1, db.DB)
	app.Listen(":3000")
} `
}

export { authentication,code };
