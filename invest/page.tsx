import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Traction } from '../components/Traction';
import { PriceBreakdown } from '../components/PriceBreakdown';
import { DeepDive } from '../components/DeepDive';
import { Roadmap } from '../components/Roadmap';
import { Raise } from '../components/Raise';
import { Footer } from '../components/Footer';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Button from '../components/Button';
import '../print.css'; // Import print-specific styles

const InvestPage: React.FC = () => {
  const downloadPDF = () => {
    const input = document.getElementById('pdf-content');
    if (input) {
      // Hide elements with 'no-print' class
      const noPrintElements = input.querySelectorAll('.no-print');
      noPrintElements.forEach(el => (el as HTMLElement).style.display = 'none');

      html2canvas(input, {
        scale: 2, // Increase scale for better quality
        useCORS: true,
        logging: false,
      }).then((canvas) => {
        // Show elements again
        noPrintElements.forEach(el => (el as HTMLElement).style.display = '');

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgProps = pdf.getImageProperties(imgData);
        const ratio = imgProps.width / imgProps.height;
        const pageHeight = pdfWidth / ratio;
        let heightLeft = imgProps.height;
        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pageHeight);
        heightLeft -= pdfHeight;

        while (heightLeft > 0) {
          position = heightLeft - imgProps.height;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pageHeight);
          heightLeft -= pdfHeight;
        }

        pdf.save('investment-summary.pdf');
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#282a1e] text-[#fdfff9] font-sans selection:bg-[#d3f54c] selection:text-[#282a1e] overflow-x-hidden relative">
      {/* Global Faint Dotted Background Pattern */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(#d3f54c_2px,transparent_2px)] bg-[length:60px_60px] opacity-[0.02] pointer-events-none"></div>
      
      <div className="absolute top-4 right-4 z-[100] no-print">
        <Button variant="primary" onClick={downloadPDF}>
          Download PDF
        </Button>
      </div>

      <main className="relative z-[10]" id="pdf-content">
        <div className="relative z-[10]">
          <Hero />
        </div>
        <div className="relative -mt-20 z-[20]">
          <Services />
        </div>
        <div className="relative -mt-20 z-[30]">
          <Traction />
        </div>
        <div className="relative -mt-20 z-[40]">
          <DeepDive />
        </div>
        <div className="relative -mt-20 z-[50]">
          <PriceBreakdown />
        </div>
        <div className="relative -mt-20 z-[60]">
          <Roadmap />
        </div>
        <div className="relative -mt-20 z-[70]">
          <Raise />
        </div>
        <div className="relative -mt-20 z-[80] no-print">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default InvestPage;
