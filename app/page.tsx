"use client";

import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Users,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import logo from "./../public/logo_ngemusik.png";
import bg from "./../public/bg.png";
import kursus1 from "./../public/kursus1.png";
import kursus2 from "./../public/kursus2.png";
import kursus3 from "./../public/kursus3.png";
import { SelectDemo } from "@/components/ui/select-demo";
import topi from "./../public/topi.png";
import lanyard from "./../public/lanyard.png";
import kaos from "./../public/kaos.png";
import galeri1 from "./../public/galeri1.png";
import galeri2 from "./../public/galeri2.png";
import { FunctionComponent, useEffect, useState } from "react";
import Modal from "@/components/ui/modal";
import { CheckboxExperience } from "@/components/ui/check-box"
import aksesoris from "./../public/aksesoris.png";
import { Value } from "@radix-ui/react-select";

type CourseName = "Piano" | "Gitar" | "Vokal";


export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedCourse, setSelectedCourse] = useState<CourseName>("Piano");
  const [materi, setMateri] = useState<string>("");
  const [priceModal, setPriceModal] = useState<string>('')
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  const getCourseModules = (course: string): string[] => {
    switch (selectedCourse) {
      case "Piano":
        return [
          'Teknik Dasar bermain Piano',
          'Notasi',
          "Pilihan Lagu Favorit 80's, 90's, 20's", 
        ];
      case "Gitar":
        return [
          'Teknik Dasar bermain Gitar',
          'Latihan Chord dan Notasi',
          "Pilihan Lagu Favorit 80's, 90's, 20's", 
        ];
      case "Vokal":
        return [
          'Teknik Dasar bermain Vokal',
          'Latihan Nada',
          "Pilihan Lagu Favorit 80's, 90's, 20's", 
        ];
      default:
        return ['Modul belum tersedia untuk kursus ini.'];
    }
  }

  const getPriceModal = (course: string) => {
      switch(selectedCourse) {
        case "Piano":
          return 
      }
  }

  const courseImages: Record<CourseName, string> = {
    Piano: kursus1.src,
    Gitar: kursus2.src,
    Vokal: kursus3.src,
  };

  const handleOpenModal = (courseName: CourseName) => {
    setSelectedCourse(courseName);
    setShowModal(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <header
        id="header"
        className={`fixed top-0 left-0 right-0 z-50 bg-transparent flex items-center justify-between px-10 py-3 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md bg-black/20" : "bg-transparent"
        }`}
      >
        <div className="flex items-center">
          <a href="#">
            <img src={logo.src} alt="Logo" className="w-28" />
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#beranda"
            className="text-[#F9FAFF] hover:text-[#f8bdae] transition-colors"
          >
            Beranda
          </a>
          <a
            href="#kursus"
            className="text-[#F9FAFF] hover:text-[#f8bdae] transition-colors"
          >
            Kursus
          </a>
          <a
            href="#testimoni"
            className="text-[#F9FAFF] hover:text-[#f8bdae] transition-colors"
          >
            Testimoni
          </a>
          <a
            href="#galeri"
            className="text-[#F9FAFF] hover:text-[#f8bdae] transition-colors"
          >
            Galeri
          </a>
          <a
            href="#lokasi"
            className="text-[#F9FAFF] hover:text-[#f8bdae] transition-colors"
          >
            Lokasi
          </a>
        </nav>
        <a href="https://wa.me/6282139759262" target="_blank">
          <Button className="bg-[#FF8D71] hover:bg-[#FF8D71]/90 text-white">
            Daftar Sekarang
          </Button>
        </a>
      </header>

      <section
        id="beranda"
        className="relative min-h-[700px] flex items-center justify-center bg-gradient-to-r from-[#847C69]/20 to-[#676358]/20"
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <img
          src={bg.src}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center justify-end">
          <div className="lg:text-left mb-8 lg:mb-0 lg:mr-10 text-center">
            <p className="text-md text-[#E9E9E9] mb-2">
              Halo Selamat Datang di{" "}
              <span className="text-[#FF8D71] font-bold">Ngemusik</span> !
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#EAEAEA] mb-4">
              <span className="text-[#FF8D71]">Just For Fun -</span> Bikin
              <br />
              Hidup Makin Hepi !
            </h1>
            <p className="text-lg text-[#E9E9E9] mb-8 max-w-md">
              Bergabunglah dengan komunitas musik terbaik dan mulai perjalanan
              musikmu bersama instruktur berpengalaman
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#kursus">
                <Button
                  size="lg"
                  className="bg-[#FF8D71] hover:bg-[#FF8D71]/90 text-white px-8 text-base"
                >
                  Lihat Kursus
                </Button>
              </a>
              <a href="https://wa.me/6282139759262" target="_blank">
                <Button
                  size="lg"
                  className="border-white text-[#FF8D71] hover:bg-white/30 hover:text-white px-8 bg-transparent border-2 font-semibold"
                >
                  Hubungi Kami
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="kursus" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#847C69] mb-12">
            Kursus Musik
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200">
                <Image
                  src={kursus1.src}
                  alt="Piano"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#847C69] mb-2">Piano</h3>
                <p className="text-[#676358] mb-4 text-sm">
                  Pelajari teknik dasar hingga mahir bermain piano dengan metode
                  yang menyenangkan.
                </p>

                <p className="text-xs font-semibold text-black/70 mb-1">
                  Pilih Paket
                </p>
                <div className="flex items-center gap-4 text-sm text-[#676358] mb-4">
                  <SelectDemo onChange={(value) => setSelectedPackage(value)} />
                </div>

                <div className="flex items-center justify-end">
                  <Button
                    className="bg-[#847C69] hover:bg-[#847C69]/90 text-white"
                    onClick={() => handleOpenModal("Piano")}
                  >
                    Pilih Paket
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200">
                <Image
                  src={kursus2.src}
                  alt="Gitar"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#847C69] mb-2">Gitar</h3>
                <p className="text-[#676358] mb-4 text-sm">
                   Belajar dasar chord dan tingkatkan kemampuan kamu dalam
                  bermain gitar!
                </p>

                <p className="text-xs font-semibold text-black/70 mb-1">
                  Pilih Paket
                </p>
                <div className="flex items-center gap-4 text-sm text-[#676358] mb-4">
                  <SelectDemo onChange={(value) => setSelectedPackage(value)}/>
                </div>

                <div className="flex items-center justify-end">
                  <Button
                    className="bg-[#847C69] hover:bg-[#847C69]/90 text-white"
                    onClick={() => handleOpenModal("Gitar")}
                  >
                    Pilih Paket
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200">
                <Image
                  src={kursus3.src}
                  alt="Vokal"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#847C69] mb-2">Vokal</h3>
                <p className="text-[#676358] mb-4 text-sm">
                  Kuasai teknik vokal profesional seperti pernapasan diafragma,
                  artikulasi, dan penguasaan nada.
                </p>

                <p className="text-xs font-semibold text-black/70 mb-1">
                  Pilih Paket
                </p>
                <div className="flex items-center gap-4 text-sm text-[#676358] mb-4">
                  <SelectDemo onChange={(value) => setSelectedPackage(value)}/>
                </div>

                <div className="flex items-center justify-end">
                  <Button
                    className="bg-[#847C69] hover:bg-[#847C69]/90 text-white"
                    onClick={() => handleOpenModal("Vokal")}
                  >
                    Pilih Paket
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <img
            className="w-full h-auto mb-4 rounded"
            src={courseImages[selectedCourse]}
            alt={`Gambar ${selectedCourse}`}
          />
          <h2 className="text-xl font-bold text-[#847C69] mb-4">
            Paket Kursus {selectedCourse}
          </h2>
          <p className="text-sm text-[#676358]">
            Di sini kamu bisa memilih jadwal, paket belajar, dan instruktur
            untuk kelas {selectedCourse.toLowerCase()}.
          </p>
           <h2 className="text-xl font-bold text-black/50 mb-4 mt-4">
            Pengalaman Kamu <span className="text-sm text-black/30">(Pilih salah satu)</span>
          </h2>
          <CheckboxExperience />
          <h2 className="text-xl font-bold text-black/50 mb-4 mt-4">
            Materi Pembelajaran
          </h2>
          <ul>
            {getCourseModules(selectedCourse).map((item, index) => (
              <li key={index}>✔️ {item}</li>
            ))}
          </ul>
            {selectedPackage && (
             <h2 className="text-xl font-bold text-black/70 mb-1 mt-4">
             {selectedPackage}
            </h2> 
            )}
        <Button 
        onClick={() => window.location.href = 'https://wa.me/6282139759262'}
        className="flex w-full text-center justify-center">
         Pesan Sekarang
          </Button>
        </Modal>
      </section>

      <section id="testimoni" className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
              Dipercaya oleh <span className="text-blue-600">100+</span> pecinta
              musik di seluruh Indonesia
            </h2>
          </div>

          <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
            <div className="overflow-hidden bg-white rounded-md shadow">
              <div className="px-8 py-12">
                <div className="relative w-24 h-24 mx-auto">
                  <img
                    className="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg"
                    alt=""
                  />
                  <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                    <svg
                      className="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg text-black">
                    “Awalnya saya hanya iseng ikut kelas gitar, tapi ternyata
                    metodenya fun banget! Sekarang saya sudah bisa main lagu
                    favorit sendiri.”
                  </p>
                </blockquote>
                <p className="text-base font-semibold tex-tblack mt-9">
                  Dinda Safitri
                </p>
                <p className="mt-1 text-base text-gray-600">Pegawai Kantor</p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-md shadow">
              <div className="px-8 py-12">
                <div className="relative w-24 h-24 mx-auto">
                  <img
                    className="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-2.jpg"
                    alt=""
                  />
                  <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                    <svg
                      className="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg text-black">
                    “Instrukturnya ramah dan sabar banget. Saya yang benar-benar
                    pemula jadi percaya diri belajar vokal dari nol.”
                  </p>
                </blockquote>
                <p className="text-base font-semibold tex-tblack mt-9">Rizky</p>
                <p className="mt-1 text-base text-gray-600">Mahasiswa</p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-md shadow">
              <div className="px-8 py-12">
                <div className="relative w-24 h-24 mx-auto">
                  <img
                    className="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-3.jpg"
                    alt=""
                  />
                  <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                    <svg
                      className="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg text-black">
                    “Tempat belajar musik yang asik dan beda dari yang lain.
                    Suasananya kayak nongkrong bareng tapi tetap serius
                    belajar.”
                  </p>
                </blockquote>
                <p className="text-base font-semibold tex-tblack mt-9">Bimo</p>
                <p className="mt-1 text-base text-gray-600">
                  Freelance Designer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white shadow-lg m-20  -mt-4 md:-mt-14 rounded-xl">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#847C69] mb-12">
            Materi Pembelajaran
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎵",
                title: "Dasar Musik",
                items: [
                  "Fundamental Teori Musik",
                  "Notasi Balok",
                  "Tangga Nada",
                  "Interval",
                ],
              },
              {
                icon: "🎸",
                title: "Penguasaan Chord",
                items: [
                  "Penguasaan Teori Chord",
                  "Chord Dasar Lanjutan",
                  "Progresi Chord",
                  "Teknik Bermain",
                ],
              },
              {
                icon: "🎹",
                title: "Studi Genre",
                items: ["Klasik Rock", "80's", "90's", "Pop"],
              },
            ].map((material, index) => (
              <div key={index} className="p-4 shadow-md rounded-md">
                <div className="text-4xl mb-4">{material.icon}</div>
                <h3 className="text-xl font-bold text-[#847C69] mb-4">
                  {material.title}
                </h3>
                <ul className="text-[#676358] space-y-2">
                  {material.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-[#FF8D71] rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#847C69] h-60 md:h-96 mb-[82rem] md:mb-64 md:w-[92rem]">
        <div className="container">
          <div className="flex gap-10 mt-4 items-center mb-12 flex-wrap">
            <div className="border-t-4 border-white w-60"></div>
            <h2 className="text-5xl font-bold text-center text-white">
              Merchandise
            </h2>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-10 md:-mr-14">
            <div className="bg-white overflow-hidden flex flex-col max-w-xs">
              <div className="relative">
                <Image
                  src={topi.src || "/placeholder.svg"}
                  alt="topi"
                  width={50}
                  height={50}
                  className="w-80 h-80 object-cover"
                />
                <div>
                  <span className="absolute top-2 left-2 bg-[#FF8D71] text-white px-2 py-1 text-xs rounded">
                    Topi
                  </span>
                </div>
              </div>
              <div className="p-4 bg-[#676358] max-w-xs">
                <p className="text-white text-center text-lg">
                  Topi dengan kualitas terbaik hadir untuk kamu !
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden flex flex-col max-w-xs">
              <div className="relative">
                <Image
                  src={aksesoris.src || "/placeholder.svg"}
                  alt="topi"
                  width={50}
                  height={50}
                  className="w-80 h-80 object-cover"
                />
                <div>
                  <span className="absolute top-2 left-2 bg-[#FF8D71] text-white px-2 py-1 text-xs rounded">
                    Aksesoris
                  </span>
                </div>
              </div>
              <div className="p-4 bg-[#676358] max-w-xs">
                <p className="text-white text-center text-lg">
                  Gelang dan Gantungan Kunci untuk kamu !
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden flex flex-col max-w-xs">
              <div className="relative">
                <Image
                  src={kaos.src || "/placeholder.svg"}
                  alt="topi"
                  width={50}
                  height={50}
                  className="w-80 h-80 object-cover"
                />
                <div>
                  <span className="absolute top-2 left-2 bg-[#FF8D71] text-white px-2 py-1 text-xs rounded">
                    Kaos
                  </span>
                </div>
              </div>
              <div className="p-4 bg-[#676358] max-w-xs">
                <p className="text-white text-center text-lg">
                  Kaos dengan desain menarik untuk kamu !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="galeri" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#847C69] mb-12">
            Aset Galeri
          </h2>

          <div className="flex flex-wrap justify-center gap-10">
            <div className="relative max-w-md bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={galeri1.src || "/placeholder.svg"}
                alt="Music learning session"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative max-w-md bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={galeri2.src || "/placeholder.svg"}
                alt="Music learning session"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-40 md:left-48 bg-orange-300 w-2 h-40 rounded-full"></div>
              <div className="absolute bottom-4 right-4 text-white">
                <p className="font-bold text-3xl">Dengan musik,</p>
                <p className="font-bold text-3xl">kita bisa sedikit</p>
                <p className="font-bold text-3xl">mewarnai</p>
                <p className="font-bold text-3xl">hidup.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="lokasi" className="md:p-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Lokasi</h2>

          <div className="flex flex-wrap justify-evenly">
            <div>
              <h3 className="text-xl font-bold mb-4">
                1. Wonokromo Gubeng, Jl. Nias No. 110, Kota Surabaya
              </h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.689419506348!2d112.7475759747606!3d-7.2761370927309645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbdc4e2819cb%3A0x6cb0d1c5c837c110!2sViaduct%20By%20Gubeng!5e0!3m2!1sid!2sid!4v1750319579247!5m2!1sid!2sid"
                width="450"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">
                2. Ruko Purimas, Kota Surabaya
              </h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.1297125714964!2d112.78212907476114!3d-7.339327092669208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fac99126f0b3%3A0x4a11d170220435d1!2sRuko%20Purimas%2C%20Jl.%20Dr.%20Ir.%20H.%20Soekarno%20No.5%2C%20Gn.%20Anyar%2C%20Kec.%20Gn.%20Anyar%2C%20Surabaya%2C%20Jawa%20Timur%2060294!5e0!3m2!1sid!2sid!4v1750319878784!5m2!1sid!2sid"
                width="450"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Tentang Kami</h3>
              <p className="text-gray-300 text-sm mb-4">
                Ngemusik adalah platform pembelajaran musik terbaik dengan
                instruktur berpengalaman dan metode yang menyenangkan.
              </p>
              <div className="flex space-x-4">
                <Instagram className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
                <Facebook className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
                <Youtube className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Links</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a href="#beranda" className="hover:text-white">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#kursus" className="hover:text-white">
                    Kursus
                  </a>
                </li>
                <li>
                  <a href="#testimoni" className="hover:text-white">
                    Testimoni
                  </a>
                </li>
                <li>
                  <a href="#lokasi" className="hover:text-white">
                    Galeri
                  </a>
                </li>
                <li>
                  <a href="#lokasi" className="hover:text-white">
                    Lokasi
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Kontak</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+6282139759262</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>ruangemusik@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Surabaya, Indonesia</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Social Media</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>@ngemusik</p>
                <p>Follow us untuk update terbaru!</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 text-sm">
            <p>&copy; 2025 Ngemusik. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
