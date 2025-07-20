import Layout from "@/components/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Last Updated: July 20, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <div className="space-y-8 text-muted-foreground">
              
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Information We Collect</h2>
                <p className="mb-4">
                  URE HR collects information to provide better services to our clients and candidates. 
                  We collect information in the following ways:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Information you provide directly, such as when you contact us for our services</li>
                  <li>Candidate information including resumes, professional profiles, and assessment results</li>
                  <li>Client company information and job requirements</li>
                  <li>Information from interviews, references, and background verification processes</li>
                  <li>Website usage data through cookies and similar technologies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
                <p className="mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide executive search and HR consulting services</li>
                  <li>To match qualified candidates with appropriate job opportunities</li>
                  <li>To conduct background verification and candidate assessments</li>
                  <li>To communicate with clients and candidates about opportunities and services</li>
                  <li>To improve our services and develop new offerings</li>
                  <li>To comply with legal obligations and industry regulations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Information Sharing and Disclosure</h2>
                <p className="mb-4">
                  URE HR does not sell, trade, or otherwise transfer personal information to outside parties except in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To client companies when presenting qualified candidates</li>
                  <li>To service providers who assist us in conducting business operations</li>
                  <li>When required by law or to protect our rights and safety</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Data Security</h2>
                <p className="mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Secure data transmission and storage protocols</li>
                  <li>Access controls and authentication systems</li>
                  <li>Regular security assessments and updates</li>
                  <li>Employee training on data protection best practices</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Data Retention</h2>
                <p>
                  We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. For candidates, we typically retain information for up to 3 years to consider future opportunities. For clients, we retain information for the duration of our business relationship plus applicable legal requirements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Your Rights</h2>
                <p className="mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Right to access and obtain a copy of your personal information</li>
                  <li>Right to rectify inaccurate or incomplete information</li>
                  <li>Right to erase your personal information under certain circumstances</li>
                  <li>Right to restrict or object to processing of your information</li>
                  <li>Right to data portability</li>
                  <li>Right to withdraw consent where processing is based on consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Cookies and Tracking Technologies</h2>
                <p>
                  Our website uses cookies and similar technologies to enhance user experience, analyze website traffic, and improve our services. You can control cookie preferences through your browser settings. However, disabling cookies may affect the functionality of our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date. We encourage you to review this policy periodically.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Contact Information</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-section-background p-6 rounded-lg">
                  <p><strong>URE HR</strong></p>
                  <p>Email: bd@urehr.com</p>
                  <p>Address: Noida, India</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;