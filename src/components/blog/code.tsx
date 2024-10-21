import CodeComparison from "@/components/ui/code-comparison";

const beforeCode = `package utils

import (
	"crypto/rsa"
	"errors"
	"github.com/golang-jwt/jwt/v5"
	"os"
	"time"
)
// sh
// # create Private Key
// openssl genpkey -algorithm RSA -out private.key-pkeyopt rsa_keygen_bits:2048

// # create Public Key จาก Private Key
// openssl rsa -pubout -in private.key -out public.key

var (
	privateKey *rsa.PrivateKey
	publicKey  *rsa.PublicKey
)

// Initialize keys
func init() {
	// Load Private Key
	privateKeyData, err := os.ReadFile("src/utils/private.key")
	if err != nil {
		panic(err)
	}

	privateKey, err = jwt.ParseRSAPrivateKeyFromPEM(privateKeyData)
	if err != nil {
		panic(err)
	}

	// Load Public Key
	publicKeyData, err := os.ReadFile("src/utils/public.key")
	if err != nil {
		panic(err)
	}

	publicKey, err = jwt.ParseRSAPublicKeyFromPEM(publicKeyData)
	if err != nil {
		panic(err)
	}
}

// CreateToken generates a new JWT token with the provided user ID, email, and role
func CreateToken(id uint, email string, role string) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodRS256,
		jwt.MapClaims{
			"id":    id,
			"email": email,
			"role":  role,
			"exp":   time.Now().Add(time.Hour * 24).Unix(), // Token expires in 24 hours
		})

	tokenString, err := token.SignedString(privateKey)
	if err != nil {
		return "", err
	}

	return tokenString, nil
}

// VerifyToken parses and validates the provided JWT token string
func VerifyToken(tokenString string) (jwt.MapClaims, error) {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		// Ensure the token's signing method is RSA and the same as expected
		if _, ok := token.Method.(*jwt.SigningMethodRSA); !ok {
			return nil, errors.New("unexpected signing method")
		}
		return publicKey, nil
	})

	if err != nil {
		return nil, err
	}

	// Check if the token is valid and contains claims
	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		return claims, nil
	}

	return nil, errors.New("invalid token")
}`;


export function CodeComparisonDemo() {
  return (
    <CodeComparison
      beforeCode={beforeCode}
      language="go"
      filename="jwt.go"
      lightTheme="github-light"
      darkTheme="github-dark"
    />
  );
}
