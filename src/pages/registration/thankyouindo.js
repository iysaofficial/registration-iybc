"use client";
import { useSearchParams } from "next/navigation";

function ThankYouIndo() {
  const searchParams = useSearchParams();

  const namaLengkap = searchParams.get("namaLengkap") || "Tidak ada data";
  const projectTitle = searchParams.get("projectTitle") || "Tidak ada data";
  const category = searchParams.get("category") || "Tidak ada data";
  const namasekolah = searchParams.get("namasekolah") || "Tidak ada data";

  return (
    <section className="thankyou">
      <div>
        <h1>Thank You for Registering!</h1>
        <p>We appreciate your participation and look forward to your involvement.</p>

        <table className="thankyou-table">
          <tbody>
            <tr>
              <td><strong>Team Member</strong></td>
              <td>{namaLengkap}</td>
            </tr>
            <tr>
              <td><strong>School Name</strong></td>
              <td>{namasekolah}</td>
            </tr>
            <tr>
              <td><strong>Project Title</strong></td>
              <td>{projectTitle}</td>
            </tr>
            <tr>
              <td><strong>Competition Category</strong></td>
              <td>{category}</td>
            </tr>
          </tbody>
        </table>

        <p>
          <strong>*If data appears, take a screenshot of this page as proof of successful registration</strong>
        </p>

        <a href="/" className="btn btn-action">
          Back to registration menu
        </a>
      </div>
    </section>
  );
}

export default ThankYouIndo;
