import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Myntra</h1>
        <div className="w-24 h-1 bg-pink-500 mb-8"></div>
        <p className="text-lg text-gray-600 max-w-3xl">
          Myntra is India's largest fashion e-commerce store. Shop for clothes, footwear, accessories and more for men,
          women, and kids from top brands.
        </p>
      </div>

      {/* Our Story */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <div className="w-16 h-1 bg-pink-500 mb-6"></div>
            <p className="text-gray-600 mb-4">
              Established in 2007, Myntra has come a long way from its humble beginnings as a personalized gift portal.
              Today, we're India's leading fashion e-commerce platform with millions of products across hundreds of
              categories.
            </p>
            <p className="text-gray-600 mb-4">
              In 2014, Myntra joined forces with Flipkart Group, creating India's largest fashion destination. Our
              mission is to revolutionize how India shops for fashion by combining technology, data insights, and a
              customer-first approach.
            </p>
            <p className="text-gray-600">
              We're not just selling clothes; we're curating lifestyles and providing personalized shopping experiences
              for millions of customers across India.
            </p>
          </div>
          <div className="md:w-1/2 relative h-80 md:h-96">
            <Image
              src="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1695828377/office_aiuktt.jpg"
              alt="Myntra Office"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Our Vision & Mission */}
      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <div className="w-12 h-1 bg-pink-500 mb-4"></div>
            <p className="text-gray-600">
              To be the most loved fashion destination for all Indians, offering unlimited choices with the best in-class
              customer experience.
            </p>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <div className="w-12 h-1 bg-pink-500 mb-4"></div>
            <p className="text-gray-600">
              To revolutionize online fashion shopping in India through technology, innovation, and customer-centricity,
              making it accessible to every Indian.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Authentic Products</h3>
            <p className="text-gray-600">
              100% authentic products sourced directly from brands or authorized retailers, quality checked.
            </p>
          </div>

          <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Quick Delivery</h3>
            <p className="text-gray-600">
              Fast delivery to 17,000+ pin codes with hassle-free returns and exchanges within 30 days.
            </p>
          </div>

          <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Secure Shopping</h3>
            <p className="text-gray-600">
              Multiple secure payment options and data protection with top-level encryption for all your transactions.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              name: "Amar Kumar",
              position: "Chief Executive Officer",
              image: "https://res.cloudinary.com/ddwbbzuxw/image/upload/v1695828456/person1_khbnif.jpg"
            },
            {
              name: "Priya Singh",
              position: "Chief Operating Officer",
              image: "https://res.cloudinary.com/ddwbbzuxw/image/upload/v1695828456/person2_gtudcx.jpg"
            },
            {
              name: "Raj Mehta",
              position: "Chief Technology Officer",
              image: "https://res.cloudinary.com/ddwbbzuxw/image/upload/v1695828456/person3_n3kdor.jpg"
            },
            {
              name: "Sonia Patel",
              position: "Chief Marketing Officer",
              image: "https://res.cloudinary.com/ddwbbzuxw/image/upload/v1695828456/person4_ggtjzw.jpg"
            }
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <div className="absolute inset-0 bg-gray-300 rounded-full">
                  {/* Placeholder for team photos */}
                  <div className="flex items-center justify-center h-full text-3xl font-bold text-white">
                    {member.name.split(' ').map(part => part[0]).join('')}
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.position}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-pink-50 p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Join the Myntra Family</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          From the latest trends to timeless classics, we have something for everyone. Start your fashion journey with us today!
        </p>
        <Link
          href="/products"
          className="px-8 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors inline-block"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
