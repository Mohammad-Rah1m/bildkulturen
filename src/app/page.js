import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div className="dotted-image px-5 lg:px-10 xl:px-32">
        <Image
          alt="dotted image"
          src="/images/dots.jpg"
          className="rounded-lg"
          width={500}
          height={500}
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="px-5 lg:px-10 my-10 flex justify-center">
        <div className="lg:w-3/4">
          <h1 className="text-3xl font-bold">Röntgendiagramm</h1>
          {/* <h3 className="font-bold">Quelle</h3> */}
          {/* <div>
            <div className="diagram-item flex gap-5">
              <div className="w-[150px]">
                <p className="font-bold">Titel</p>
              </div>
              <div className="w-[100%]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam eum omnis itaque ea culpa eaque recusandae! Natus
                  veritatis ipsum, aspernatur rerum quae debitis harum.
                </p>
              </div>
            </div>
            <div className="diagram-item flex gap-5">
              <div className="w-[150px]">
                <p className="font-bold">Autor</p>
              </div>
              <div className="w-[100%]">
                <p>
                  C.Steinbrinck
                </p>
              </div>
            </div>
            <div className="diagram-item flex gap-5">
              <div className="w-[150px]">
                <p className="font-bold">Lorem Ipsum</p>
              </div>
              <div className="w-[100%]">
                <p>
                  1925
                </p>
              </div>
            </div>
            <div className="diagram-item flex gap-5">
              <div className="w-[150px]">
                <p className="font-bold">Lorem Ipsum</p>
              </div>
              <div className="w-[100%]">
                <p>
                  1925
                </p>
              </div>
            </div>
          </div> */}
          <div className="mt-5">
            <table className="table-auto border-collapse w-full">
              <thead>
                <tr>
                  <th className="border px-4 py-2 text-left">Quelle</th>
                  <th className="border px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Titel</td>
                  <td className="border px-4 py-2"><p>Über die heutigen Stand der Micellartheorie auf botanischem Gebiete.</p></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Autor</td>
                  <td className="border px-4 py-2">C. Steinbrinck</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Erscheinungsjahr</td>
                  <td className="border px-4 py-2">
                    1925
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Zeitschrift</td>
                  <td className="border px-4 py-2">
                  Biologisches Zentralblatt
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Band</td>
                  <td className="border px-4 py-2">
                  45
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Heft</td>
                  <td className="border px-4 py-2">
                  1
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Seiten</td>
                  <td className="border px-4 py-2">
                  1-19
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Nachweis</td>
                  <td className="border px-4 py-2">
                  Steinbrinck, 1925, 9
                  </td>
                </tr>
                <tr className="">
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2">
                    <p><strong>ID</strong> Steinbrinck-1925-2b</p>
                  </td>
                </tr>
                <tr className="">
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2">
                    <p><strong>Jahr</strong> K.A</p>
                  </td>
                </tr>
                <tr className="">
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2">
                    <p><strong>Beschreibung</strong> Abb. 2b. Röntgendiagramm der Ramié-Faser, Strahl parallel den Fasern.</p>
                  </td>
                </tr>
                <tr className="">
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2">
                    <p><strong>Personen </strong> Steinbrinck
                    </p>
                  </td>
                </tr>
                <tr className="">
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2">
                    <p><strong>Orte </strong> k.A.
                    </p>
                  </td>
                </tr>
                <tr className="">
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2">
                    <p><strong>Sachbegriffe </strong> Foto, Institutionen, Makroorganismen, Medientechnik, Objekte, Organismen, Organismenteile,Pflanzen, Röntgenbild
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
